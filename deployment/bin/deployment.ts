#!/usr/bin/env node
import sns = require('@aws-cdk/aws-sns');
import sqs = require('@aws-cdk/aws-sqs');
import cdk = require('@aws-cdk/cdk');

class DeploymentStack extends cdk.Stack {
  constructor(parent: cdk.App, name: string, props?: cdk.StackProps) {
    super(parent, name, props);

    const queue = new sqs.Queue(this, 'DeploymentQueue', {
      visibilityTimeoutSec: 300
    });

    const topic = new sns.Topic(this, 'DeploymentTopic');

    topic.subscribeQueue(queue);
  }
}

const app = new cdk.App();

new DeploymentStack(app, 'DeploymentStack');

app.run();
