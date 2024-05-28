{
  description = "Frontend app for reciperium";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

    devenv.url = "github:cachix/devenv";
    devenv.inputs.nixpkgs.follows = "nixpkgs";

    gitignore.url = "github:hercules-ci/gitignore.nix";
    gitignore.inputs.nixpkgs.follows = "nixpkgs";

  };

  outputs = inputs@{ flake-parts, nixpkgs, gitignore, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      debug = true;
      imports = [
        inputs.devenv.flakeModule
      ];

      systems = [ "x86_64-linux" "aarch64-darwin" "x86_64-darwin" ];
      perSystem = { config, self', inputs', pkgs, system, ... }:
        {
          devenv.shells.default = {
            name = "reciperium-playground";

            packages = with pkgs; [
              just
              nodejs_20
            ] ++ lib.optionals stdenv.isDarwin [
              libiconv
              darwin.apple_sdk_11_0.frameworks.Cocoa
              darwin.apple_sdk_11_0.frameworks.CoreServices
              darwin.apple_sdk_11_0.frameworks.Security
            ];
          };
        };
    };
}
