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

If you prefer, you can use a Docker Development Environment instead of installing the code on your machine.  With VSCode support for remote containers, you can use the IDE on your local machine to edit source files inside the container.  

First, install or upgrade Docker on your host, to have the latest Dev Env features.  

The base image for the environment development is node:16.  This can be modified in the .docker/config.json file.  

Two possibilities exists  : 
    - you can host the files on your local filesystem and use a container to run the application, such that any change is refleted on your local machine. 
    - or you can keep the code entirely in the container, edit the files with VSCode, check the result on your local browser and use Git to commit/push your code.  The code doesn't need to exist on your host filesystem, and you don't need to install the dependencies on your machine.  



### Using a Local Folder  

Start a Docker Development Environment from your Docker Dashboad.  Select "New Dev Environment", and choose source "Local Directory".  Select the directory on your filesystem, and finish the interactive wizard. You can now push the "Open in VSCode" button.  

Once in VSCode, you can edit the source files, but also run the development server.  Open a terminal on the container, and run : 

    > yarn install
    > yarn docs:dev

At the end of the installation of the dependencies, VSCode will detect that there is a server running on port 8080, and will propose to open it in your browser.  You will then be able to view the current documentation. 

### Using a remote repository

Use the same procedure as above, but choose source "Existing Git Repo" and provide the URL of the repository.  As above, run : 

    > yarn install
    > yarn docs:dev

and open localhost:8080 in your browser to preview the TLCA documentation.  