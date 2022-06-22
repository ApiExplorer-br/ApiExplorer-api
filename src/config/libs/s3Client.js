import aws from 'aws-sdk';

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: process.env.AWS_DEFAULT_REGION,
});
const BUCKET = process.env.BUCKET_NAME;
export const s3 = new aws.S3();

export const deleteFileFromS3 = async (Key) => {
  await s3.deleteObject({ Bucket: BUCKET, Key }).promise();
  return 'File deleted';
};
