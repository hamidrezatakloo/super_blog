# Generated by Django 3.2 on 2022-12-02 17:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0005_alter_useraccount_date_of_birth'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='date_of_birth',
            field=models.DateField(blank=True, null=True),
        ),
    ]
