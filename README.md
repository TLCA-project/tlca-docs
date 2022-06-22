# tlca-docs

Documentation related to the TLCA project

## Quick install

Start by installing required dependencies:

- [Node.js](https://nodejs.org) (10+)
- [Yarn Classic](https://classic.yarnpkg.com)

Then, clone the Git repository, and launch the installation:

    > git clone https://github.com/TLCA-project/tlca-docs.git
    > cd tlca-docs
    > yarn install

Once successfully installed, you can run a local dev server:

    > yarn docs:dev

And the resulting website should be available locally on [http://localhost:8080](http://localhost:8080).

## Install in Docker Development Environment

You can also use a Docker Development Environment instead of installing the application on your own machine.

First, install or upgrade [Docker](https://www.docker.com) on your host, to have the latest _Dev Env_ features.

With [VSCode support for remote containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers), you can edit source files that are inside the container directly from the IDE on your local machine.

The base image for the environment development is `node:16`. This can be modified in the `.docker/config.json` file.

There are two possible ways to work:
- the source files can remain on your local filesystem, with all the dependencies files, and you use a container to run the application, knowing that any change in the container is reflected back on your local machine,
- or you can keep the source files entirely in the container, with all the dependencies files, edit the code with VSCode on your local machine, check the results on your local browser, knowing that the code does not need to exist on your host filesystem.

### Using a local folder

Start a Docker Development Environment from Docker Desktop. For that, first _“Create”_ a _“New Dev Environment”_ and choose the _“Local Directory”_ source. Select the directory on your local filesystem, and finish the interactive wizard. You can now push the _“Open in VSCode”_ button.

Once in VSCode, you can edit the source files, but also run the development server. Open a terminal in the container from VSCode, and run:

    > yarn install
    > yarn docs:dev

At the end of the dependencies installation, VSCode will detect that there is a server running on port 8080, and will propose to open it in your browser. You will then be able to view the resulting website.

### Using a remote repository

Use the same procedure as above, but choose source _“Existing Git Repo”_ and provide the URL of the repository. As above, run:

    > yarn install
    > yarn docs:dev

and open [http://localhost:8080](http://localhost:8080) in your browser to view the resulting website.
