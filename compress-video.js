#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

async function compressVideo() {
  const inputPath = 'public/media/breaking-wave.mp4';
  const outputPath = 'public/media/breaking-wave-optimized.mp4';

  try {
    console.log('🎬 Starting video compression...');
    console.log(`Input: ${inputPath}`);
    
    // Get input file size
    const inputStats = fs.statSync(inputPath);
    const inputSizeMB = (inputStats.size / 1024 / 1024).toFixed(2);
    console.log(`Input size: ${inputSizeMB} MB`);

    // Use ffmpeg to compress
    const command = `ffmpeg -i "${inputPath}" -c:v libx264 -preset slow -crf 24 -c:a aac -b:a 96k "${outputPath}" -y`;
    
    console.log('\n📊 Compression in progress (this may take a few minutes)...');
    console.log(`Command: ${command}\n`);

    try {
      await execAsync(command);
    } catch (e) {
      // Try with h264_nvenc if libx264 fails
      console.log('libx264 not available, trying h264_nvenc...');
      const alternativeCommand = `ffmpeg -i "${inputPath}" -c:v h264_nvenc -b:v 1200k -c:a aac -b:a 96k "${outputPath}" -y`;
      try {
        await execAsync(alternativeCommand);
      } catch (e2) {
        // Final fallback with mpeg4
        console.log('GPU encoding not available, using MPEG4...');
        const fallbackCommand = `ffmpeg -i "${inputPath}" -c:v mpeg4 -b:v 1200k -c:a aac -b:a 96k "${outputPath}" -y`;
        await execAsync(fallbackCommand);
      }
    }

    // Get output file size
    const outputStats = fs.statSync(outputPath);
    const outputSizeMB = (outputStats.size / 1024 / 1024).toFixed(2);
    const reduction = (((inputStats.size - outputStats.size) / inputStats.size) * 100).toFixed(1);

    console.log('\n✅ Compression complete!');
    console.log(`Output size: ${outputSizeMB} MB`);
    console.log(`Compression ratio: ${reduction}% reduction`);
    console.log(`Saved: ${(inputStats.size - outputStats.size) / 1024 / 1024 |0} MB`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

compressVideo();
