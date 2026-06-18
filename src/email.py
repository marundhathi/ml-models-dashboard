from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime
import smtplib
import ssl
from email.mime.text import MIMEText

def send_failure_email():
    msg = MIMEText('A task has failed in Airflow!')
    msg['Subject'] = 'Airflow Task Failed!'
    msg['From'] = 'memail@gmail.com'
    msg['To'] = 'memail@gmail.com'

    context = ssl.create_default_context()
    with smtplib.SMTP_SSL('smtp.gmail.com', 405, context=context) as server:
        server.login('memail@gmail.com', 'gfgvk')
        server.sendmail('memail@gmail.com', 'memail@gmail.com', msg.as_string())
        print('Email sent!')

def fail_task():
    raise Exception("This task failed on purpose!")

with DAG(
    dag_id="email_dag",
    start_date=datetime(2024, 1, 1),
    schedule="@daily",
    catchup=False
) as dag:

    task1 = PythonOperator(
        task_id="failing_task",
        python_callable=fail_task
    )

    task2 = PythonOperator(
        task_id="send_email",
        python_callable=send_failure_email,
        trigger_rule="one_failed"
    )

    task1 >> task2
