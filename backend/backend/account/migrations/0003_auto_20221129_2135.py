# Generated by Django 3.2 on 2022-11-29 21:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_auto_20221129_1603'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='about',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AddField(
            model_name='useraccount',
            name='date_of_birth',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='useraccount',
            name='phone_number',
            field=models.CharField(blank=True, max_length=16),
        ),
    ]
