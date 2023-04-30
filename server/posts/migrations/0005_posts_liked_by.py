# Generated by Django 4.2 on 2023-04-28 08:05

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("posts", "0004_alter_posts_id"),
    ]

    operations = [
        migrations.AddField(
            model_name="posts",
            name="liked_by",
            field=models.ManyToManyField(
                related_name="users_posts", to=settings.AUTH_USER_MODEL
            ),
        ),
    ]
