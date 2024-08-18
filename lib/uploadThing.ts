import {generateUploadButton, generateUploadDropzone} from '@uploadthing/react';

import type { OurFileRouter } from '@/app/api/uploadthing/core';

export const uploadButton = generateUploadButton<OurFileRouter>();
export const uploadDropzone = generateUploadDropzone<OurFileRouter>();