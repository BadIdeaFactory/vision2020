# Notes for installing, developing etc. (WIP)

Target deployments are:

- **Kiosks**: Windows executable with Electron. Requires a Windows machine to build on.
- **Web**: a web-hosted version of the experience with kiosk-specific features removed.

## Prerequisites (Windows target machine build)

- Install [Node.js for Windows](https://nodejs.org/en/) (includes npm)
- Install [Git for Windows](https://git-scm.com/download/win) (includes Git Bash)
- Install [Git LFS for Windows](https://git-lfs.github.com/)
  - Check if installed with `git lfs version`
  - May need to run `git lfs install` after the install executable is run
  - Note: run git commands in Git bash
- Install [Netlify CLI](https://cli.netlify.com/) via npm
- Install [Netlify Credential Helper](https://github.com/netlify/netlify-credential-helper#install-on-windows-with-powershell_) with Powershell (do not use Git Bash)
- In Git Bash, run `netlify login`. Use the Vision2020 Netlify credentials.
- Clone the repository (Git Bash):
  - `git clone git@github.com:BadIdeaFactory/vision2020.git`
  - If Netlify and LFS are all installed correctly, everything should download correctly, including large media content. If you are presented with Git Credential Manager or OpenSSH login prompts, then the credential helper may not be running correctly. If everything has been installed it's possible restarting Git Bash or the computer may help.
- Install [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable).
- Run `yarn install`.
  - You may see some errors related to building `grpc`. This seems to be necessary for electron distribution. It seems that running `yarn dist` later gets `electron-builder` to build `grpc` properly.
- Run `yarn build`.
- To run a local server:
  - `yarn start`
  - Open `http://localhost:3000` in a browser. Preferably Chrome for best compatibility, as Electron is the target executable environment.
- To run a preview Electron instance:
  - `yarn electron`
  - Note: gRPC needs to be built for this. If you get an error run `yarn dist` first to have it rebuild `grpc`.
- To export an executable for kiosks:
  - `yarn dist`
  - Copy the contents of the `dist` folder to the kiosk.

## Kiosk distribution

- TODO (See document sent to Dome/ArtGuild)

## Web distribution

- TODO
