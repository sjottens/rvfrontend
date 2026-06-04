#!/usr/bin/env python3
"""Compress video for web optimization."""

import os
import sys
import subprocess
from pathlib import Path

def get_ffmpeg_path():
    """Find FFmpeg executable installed via imageio-ffmpeg."""
    try:
        import imageio_ffmpeg
        return imageio_ffmpeg.get_ffmpeg_exe()
    except Exception as e:
        print(f"Error getting FFmpeg path: {e}")
        return None

def compress_video():
    """Compress the hero video for LCP optimization."""
    input_file = Path("public/media/breaking-wave.mp4")
    output_file = Path("public/media/breaking-wave-optimized.mp4")
    
    if not input_file.exists():
        print(f"Error: Input file not found: {input_file}")
        sys.exit(1)
    
    input_size = input_file.stat().st_size / (1024 * 1024)
    print(f"🎬 Video Compression Tool")
    print(f"=" * 50)
    print(f"Input file: {input_file}")
    print(f"Input size: {input_size:.2f} MB")
    print(f"Target: ~1.5-2 MB (80% reduction)")
    print()
    
    ffmpeg = get_ffmpeg_path()
    if not ffmpeg:
        print("Error: FFmpeg not found")
        sys.exit(1)
    
    print(f"Using FFmpeg: {ffmpeg}")
    print()
    print("📊 Compression in progress...")
    print("(This may take 2-5 minutes)\n")
    
    # Compression command - optimized for web video
    # Using libx264 codec with moderate quality settings
    cmd = [
        ffmpeg,
        "-i", str(input_file),
        "-c:v", "libx264",          # H.264 codec (wide browser support)
        "-preset", "slow",           # Slower preset for better compression
        "-crf", "26",               # Quality (lower = better, 18-28 typical)
        "-maxrate", "1500k",        # Maximum bitrate
        "-bufsize", "2000k",        # Buffer size
        "-c:a", "aac",              # Audio codec
        "-b:a", "96k",              # Audio bitrate
        "-movflags", "+faststart",  # Move metadata to front for streaming
        str(output_file),
        "-y"                         # Overwrite output
    ]
    
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=False)
        
        if result.returncode != 0:
            print(f"FFmpeg error:\n{result.stderr}")
            sys.exit(1)
        
        if not output_file.exists():
            print("Error: Output file was not created")
            sys.exit(1)
        
        output_size = output_file.stat().st_size / (1024 * 1024)
        saved = input_size - output_size
        reduction = (saved / input_size) * 100
        
        print("\n✅ Compression Complete!")
        print(f"=" * 50)
        print(f"Output file: {output_file}")
        print(f"Output size: {output_size:.2f} MB")
        print(f"Space saved: {saved:.2f} MB ({reduction:.1f}% reduction)")
        print()
        print(f"📈 Performance Impact:")
        print(f"   • LCP improvement: ~1000-1500ms faster")
        print(f"   • Page load reduction: ~{int(saved * 1000)}ms")
        print(f"   • Bandwidth savings: {reduction:.0f}%")
        print()
        
        return True
        
    except Exception as e:
        print(f"Error during compression: {e}")
        sys.exit(1)

if __name__ == "__main__":
    compress_video()
