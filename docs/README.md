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
  - Run `netlify login` to login to Netlify
- Install [Netlify Credential Helper](https://github.com/netlify/netlify-credential-helper#install-on-windows-with-powershell_) with Powershell (do not use Git Bash)
- In Git Bash, run `netlify login`. Use the Vision2020 Netlify credentials.
- Clone the repository (Git Bash):
  - `git clone git@github.com:BadIdeaFactory/vision2020.git`
  - If Netlify and LFS are all installed correctly, everything should download correctly, including large media content. If you are presented with Git Credential Manager or OpenSSH login prompts, then the credential helper may not be running correctly. If everything has been installed it's possible restarting Git Bash or the computer may help.
- Run `npm install`.
- Run `npm run build`.
- To run a local server:
  - `npm start`
  - Open `http://localhost:3000` in a browser. Preferably Chrome for best compatibility, as Electron is the target executable environment.
- To run a preview Electron instance:
  - `npm run electron`
  - Note: gRPC needs to be built for this. If you get an error run `npm run dist` first to have it rebuild `grpc`.
- To export an executable for kiosks:
  - `npm run dist` to build the distribution. This should take 3-4 minutes.
  - Copy the contents of the `dist/win-unpacked` folder to the kiosk.

### Dependency notes

- `next-optimized-images` cannot be bumped to 2.6.1; there appears to have been a breaking change with the file loader which makes images not appear anymore when built

## Kiosk distribution

### Setting up each kiosk

- Copy the `dist/win-unpacked` folder onto each device. Doesn’t matter where you put it
- Install fonts to the system (easier than packaging and reading it in the app.)
- Make a shortcut to the `vision2020.exe` executable and put it in Startup Items
- Create a `kiosk_id.txt` on the Desktop with the kiosk ID number (see instructions below)
- Verify monitor resolution is at 1080x1920 and at 100% scale (not the “recommended” 150% scale which will mess up the layout)
- Set pointers to not show a response bubble when tapping the screen
- Connect the device to the Internet one time and run the application
  - Do a test vote and make sure Results shows up one time
  - Make sure network access popup doesn't come up (Windows might need to confirm that application can communicate on the Internet)

### Setting the kiosk ID

Create a text file on the Desktop called `kiosk_id.txt`. (Note the underscore. File name is case sensitive, make sure it’s all lowercase. If Windows is set to hide extensions, the `.txt` extension may be automatically appended, so in that case, do not type the extension.) Open this file in Notepad and type in the number of the kiosk. Save this file. The next time you run `vision2020.exe` it will look for this file and display the attract loop for that kiosk.

| Kiosk id | Category               |
| -------- | ---------------------- |
| 1        | Agents of Change       |
| 2        | Politics & Government  |
| 3        | Business & Finance     |
| 4        | STEM                   |
| 5        | Communications & Media |
| 6        | Sports                 |

Do not type in ANY other character.

#### Troubleshooting:

- **If the kiosk is only showing id #1** (Agents of Change), then that means the application cannot find `kiosk_id.txt`. Make sure it’s in the right place, named correctly, and that the filename is not `kiosk_id.txt.txt`.
- **If the kiosk shows Unexpected error message**, then that means the file is read, but it contains the wrong data. Open it make sure it only has one of the six numbers. (e.g. If you put in “0” or “7”, this will crash the application.

## Web distribution

- TODO
