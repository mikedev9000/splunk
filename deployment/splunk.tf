

provider "aws" {
  region     = "us-east-1"
}

resource "aws_instance" "example" {
  ami           = "ami-0f40262cf764643e4"
  instance_type = "t2.micro"
}