# Generated by Django 4.2 on 2023-04-29 04:29

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("users", "0008_alter_user_id"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="id",
            field=models.CharField(
                default="82d0a889e53344e98389497d3e33fc5f",
                editable=False,
                max_length=100,
                primary_key=True,
                serialize=False,
                unique=True,
                verbose_name="ID",
            ),
        ),
    ]
