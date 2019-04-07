# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from mysite.Group.models import Group
from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Channels(models.Model):
    name = models.CharField(max_length = 128)
    description = models.CharField(max_length = 256, default=None)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    groupid = models.ForeignKey(Group, on_delete=models.CASCADE)

class channel_perm_user(models.Model):
    userid = models.ForeignKey(User, on_delete=models.CASCADE)
    channelid = models.ForeignKey(channelid)
    perm = models.CharField(max_length=128)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
