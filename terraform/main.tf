
terraform {
  backend "s3" {
    key            = "main.tfstate"
    bucket         = "trulsstenrud.no-state"
    dynamodb_table = "trulsstenrud.no-state"
    acl            = "bucket-owner-full-control"
    region         = "eu-west-1"
  }
}

provider "aws" {
  region = "eu-west-1"
}

provider "aws" {
  alias  = "us"
  region = "us-east-1"
}

resource aws_acm_certificate homepage {
  provider          = aws.us
  domain_name       = "trulsstenrud.no"
  validation_method = "EMAIL"
}

resource "aws_s3_bucket" "homepage_bucket" {
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


resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.homepage_bucket.bucket_domain_name
    origin_id   = aws_s3_bucket.homepage_bucket.id


  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Cloudfront for my webpage"
  default_root_object = "index.html"

  aliases = ["trulsstenrud.no"]

  price_class = "PriceClass_200"

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = aws_s3_bucket.homepage_bucket.id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["NO"]
    }
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.homepage.arn
    ssl_support_method  = "sni-only"
  }
}
