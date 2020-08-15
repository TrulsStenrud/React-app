
provider "aws" {
    region = "eu-west-1"
}

resource aws_s3_bucket b {
  bucket = "trulsstenrud.no"
  acl    = "public-read"
  policy = <<POLICY
{
    "Version": "2012-10-17",
    "Id": "IDSADAS",
    "Statement": [
        {
            "Sid": "AddPerm",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::trulsstenrud.no/*"
        }
        ]
    }
POLICY
  website {
    index_document = "index.html"
    error_document = ""
  }
}