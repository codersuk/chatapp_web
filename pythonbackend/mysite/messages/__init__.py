# foo/apps.py

from django.apps import AppConfig

class FooConfig(AppConfig):
    name = '/Users/user/chatapp_web/pythonbackend/mysite/messages'
    label = 'marianne_try'  # <-- this is the important line - change it to anything other than the default, which is the module name ('foo' in this case)
