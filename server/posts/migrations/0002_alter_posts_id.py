# Generated by Django 4.2 on 2023-04-12 02:05

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("posts", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="posts",
            name="id",
            field=models.CharField(
                default="920806cf89404b5c8b4455a4d1255ab1",
                editable=False,
                max_length=100,
                primary_key=True,
                serialize=False,
                unique=True,
                verbose_name="ID",
            ),
        ),
    ]