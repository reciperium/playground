{
  description = "Frontend app for reciperium";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

    devenv.url = "github:cachix/devenv";
    devenv.inputs.nixpkgs.follows = "nixpkgs";

    gitignore.url = "github:hercules-ci/gitignore.nix";
    gitignore.inputs.nixpkgs.follows = "nixpkgs";

  };

  outputs =
    inputs@{
      flake-parts,
      nixpkgs,
      gitignore,
      ...
    }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      debug = true;
      imports = [
        inputs.devenv.flakeModule
      ];

      systems = [
        "x86_64-linux"
        "aarch64-darwin"
        "x86_64-darwin"
      ];
      perSystem =
        { pkgs, ... }:
        let
          nodejs = pkgs.nodejs_24;
        in
        {
          packages = {
            playground = pkgs.buildNpmPackage {
              name = "playground";
              src = gitignore.lib.gitignoreSource ./.;
              npmDeps = pkgs.importNpmLock {
                npmRoot = ./.;
              };
              npmConfigHook = pkgs.importNpmLock.npmConfigHook;

              nativeBuildInputs = [ nodejs ];
              buildPhase = ''
                ${nodejs}/bin/npm run build --unsafe-perm=true
              '';
              installPhase = ''
                mkdir -p $out
                cp -R dist/* $out
              '';
            };
          };
          devShells.default = pkgs.mkShell {
            name = "reciperium-playground";
            buildInputs = with pkgs; [
              nodejs
              just
            ];
          };
        };
    };
}
