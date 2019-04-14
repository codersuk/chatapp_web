from django.db import models

# Create your models here.
class Messages(models.Model):
    message = models.TextField()
    message_type = models.CharField(max_length = 100, default = 'txt')
    channelid = models.PositiveIntegerField(max_length = 11)
    userid = models.PositiveIntegerField(max_length = 11)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)