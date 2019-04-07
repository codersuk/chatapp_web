
Sumia - 31/03/2019
----------

virtualevn is a tool to create isolated python environment.

pip install virtualenv

navigate to where you want to install your code
mkdir codersuk
cd codersuk
mkdir chatapp
cd chatapp
vitualenv envy

Using base prefix '/Users/Sumia/anaconda'
New python executable in /Users/Sumia/codersuk/chatapp/envy/bin/python
dyld: Library not loaded: @rpath/libpython3.5m.dylib
  Referenced from: /Users/Sumia/codersuk/chatapp/envy/bin/python
  Reason: image not found
ERROR: The executable /Users/Sumia/codersuk/chatapp/envy/bin/python is not functioning
ERROR: It thinks sys.prefix is '/Users/Sumia/codersuk/chatapp' (should be '/Users/Sumia/codersuk/chatapp/envy')
ERROR: virtualenv is not compatible with this system or executable

https://stackoverflow.com/questions/44575994/virtualenv-not-compatible-with-this-system-or-executable
My limited undestanding is that my python interpreter and packages are managed under Anaconda using Conda package manager, and my virtualenv was originally installed using pip..

uninstalling virtualenv with pip and re-installing with conda fixed the issue

pip uninstall virtualenv
conda install virtualenv

virtualenv envy -> setup virtual environment for project
source envy/bin/activate -> to activate virtual environment
dectivate -> to deactivate virtual environment

inside envy
pip install django


https://docs.djangoproject.com/en/2.2/intro/tutorial01/
Create Project
--------------
django-admin startproject mysite -> mysite is the projectname

cd mysite -> (outer mysite)

run the server 
python manage.py runserver

Now that the server’s running, visit http://127.0.0.1:8000/ with your Web browser.

#to change port:
python manage.py runserver 8080

#If you want to change the server’s IP, pass it along with the port. 

Quit the server with CONTROL-C.


create apps for the project
python manage.py startapp group
python manage.py startapp channel
python manage.py startapp message


virtualenvwrapper
-----------------
virtualenvwrapper is an extension of virtualenv.
The extensions include wrappers for creating and deleting virtual environments and otherwise managing your development workflow, making it easier to work on more than one project at a time without introducing conflicts in their dependencies.

Django
-------
-Django is a python based webframework.
-Model-view-template architectural pattern
-Primary goal is to create complex database driven website


Which python for django
--------------
python3 is recommended
python includes a lightweight database called SQLite


#verify python is installed
---------------------------
python -V (case sensitive)
python3 -V

OR

python --version

#check if django installed and the version
-------------------------
python -m django --version
-m stands for module-name

OR 
1. run python shell prompt
python
>>> import django
>>> print(django.get_version())

if you are interested knowing about other flags in python
python --help



pip -> package installer for python
pip --version
pip install <package> -> install package
pip install --upgrade <package> -> upgrade package
pip uninstall <package> -> uninstall a package
pip freeze -> whats installed

#Install Django
update pip -> pip install --upgrade pip
pip install Django

