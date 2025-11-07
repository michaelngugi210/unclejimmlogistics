# Video Compression Guide for Uncle Jim Logistics

## What I've Done (Display Optimization)

✅ **Reduced display dimensions:** 800x600 → 500x375 (37.5% smaller display)
✅ **Changed preload:** `metadata` → `none` (videos don't load until clicked)
✅ **Added lazy loading:** Videos load only when scrolled into view
✅ **Updated CSS:** Max-width set to 500px with better spacing

**Result:** Much faster page loading, but video FILE SIZES remain unchanged.

---

## How to Actually Compress Video Files

To reduce the actual file sizes, you need to compress the video files. Here are your options:

### Option 1: Online Tools (Easiest - No Installation)

#### **1. FreeConvert.com** (Recommended)
- Visit: https://www.freeconvert.com/video-compressor
- Upload your video
- Select compression level (try "Medium" first)
- Download compressed version
- **Pros:** Free, no installation, simple
- **Cons:** File size limits, requires internet

#### **2. Clideo.com**
- Visit: https://clideo.com/compress-video
- Similar process to FreeConvert
- Good quality retention

### Option 2: Windows Software (Best Quality Control)

#### **HandBrake** (Free & Recommended)
1. **Download:** https://handbrake.fr/
2. **Install** the Windows version
3. **Steps:**
   - Open HandBrake
   - Click "Open Source" → Select your video
   - Preset: Choose "Web" → "Gmail Medium 5 Minutes 720p30"
   - Click "Start Encode"
   - Your compressed video saves to desktop

**Settings for best results:**
- **Format:** MP4
- **Video Codec:** H.264
- **Quality:** RF 23-28 (lower = bigger file but better quality)
- **Resolution:** 720p or 480p (your videos are currently likely 1080p)
- **Frame Rate:** Same as source or 30fps

**Expected results:**
- Original 50MB → Compressed 10-15MB (70-80% reduction)
- Original 100MB → Compressed 20-30MB

### Option 3: Command Line (Advanced)

#### **FFmpeg** (Most Powerful)
If you're comfortable with command line:

```bash
# Install FFmpeg first: https://ffmpeg.org/download.html

# Basic compression (good quality, smaller file)
ffmpeg -i input.mp4 -vcodec h264 -crf 28 output.mp4

# Aggressive compression (smaller file)
ffmpeg -i input.mp4 -vcodec h264 -crf 32 -preset slow output.mp4

# Resize + compress (best for web)
ffmpeg -i input.mp4 -vf scale=720:-1 -vcodec h264 -crf 28 output.mp4
```

---

## Step-by-Step: Compress Your Videos

### Your Current Videos:
1. `WhatsApp Video 2025-11-03 at 09.53.40_f26999c2.mp4`
2. `WhatsApp Video 2025-11-03 at 09.53.47_5aea9e6d.mp4`
3. `WhatsApp Video 2025-11-03 at 09.54.14_0cfcaac5.mp4`

### Process (Using HandBrake):

1. **Install HandBrake** from https://handbrake.fr/

2. **For each video:**
   - Open video in HandBrake
   - Select Preset: "Web" → "Gmail Medium 5 Minutes 720p30"
   - Click "Start Encode"
   - Wait for encoding to complete

3. **Compare file sizes:**
   - Check original file size (right-click → Properties)
   - Check compressed file size
   - Aim for 60-80% reduction

4. **Replace files:**
   - Backup originals (move to a backup folder)
   - Rename compressed videos to match original names
   - Place in `images/` folder

5. **Test:**
   - Open `gallery.html` in browser
   - Check video quality is acceptable
   - Verify playback works smoothly

---

## Recommended Settings for Your Videos

Since these are WhatsApp videos (likely phone recordings):

**Target Settings:**
- **Resolution:** 720p (1280x720) - Good balance
- **Bitrate:** 1.5-2.5 Mbps for video
- **Audio:** 128 kbps AAC
- **Format:** MP4 (H.264 codec)
- **Frame Rate:** 30fps

**Expected File Size:**
- 1 minute video: ~15-25 MB (compressed)
- 2 minute video: ~30-50 MB (compressed)

---

## Quality vs Size Trade-off

| Setting | File Size | Quality | Best For |
|---------|-----------|---------|----------|
| **High Quality** (CRF 20-23) | Larger | Excellent | Important showcase videos |
| **Medium Quality** (CRF 24-28) | Medium | Very Good | **Recommended for web** |
| **Lower Quality** (CRF 29-32) | Smaller | Good | Background videos |

**Recommendation:** Use CRF 26-28 for your tourism videos - barely noticeable quality loss with 60-70% size reduction.

---

## Before & After Comparison

### Before Optimization:
- Display size: 800x600px
- Preload: metadata (loads thumbnails immediately)
- Typical file: 50-100MB each
- **Total page load:** ~150-300MB of video

### After My Changes:
- Display size: 500x375px (smaller on screen)
- Preload: none (loads only when clicked)
- Lazy loading enabled
- **Initial page load:** ~0MB (videos load on demand)

### After You Compress Files:
- Same display size: 500x375px
- Preload: none
- Typical file: 15-30MB each (compressed)
- **Total when all played:** ~45-90MB (70% reduction)

---

## Testing Compressed Videos

After compression, check:

✅ **Quality Check:**
- Video is clear and sharp
- No excessive pixelation or artifacts
- Colors look natural
- Motion is smooth (no stuttering)

✅ **Performance Check:**
- Open gallery.html in browser
- Check page load speed
- Verify videos play smoothly
- Test on mobile if possible

✅ **File Size Check:**
- Original vs compressed size
- Aim for 60-80% reduction
- If too pixelated, try lower compression (CRF 24 instead of 28)

---

## Quick Wins

**Immediate Actions:**
1. ✅ **Done:** Display optimization (my changes)
2. **Do Next:** Download HandBrake
3. **Compress:** All 3 videos using "Gmail Medium 720p30" preset
4. **Replace:** Original files with compressed versions
5. **Test:** Open gallery.html and check quality

**Expected Results:**
- Page loads 70% faster
- Better mobile experience
- Same visual quality (barely noticeable difference)
- Professional website performance

---

## Tools Download Links

- **HandBrake:** https://handbrake.fr/downloads.php
- **FFmpeg:** https://ffmpeg.org/download.html
- **FreeConvert:** https://www.freeconvert.com/video-compressor
- **Clideo:** https://clideo.com/compress-video

---

## Need Help?

If videos are too large after compression:
1. Try a higher CRF value (28 → 30)
2. Reduce resolution (720p → 480p)
3. Trim video length if possible
4. Consider using poster images instead of autoplaying

**Last Updated:** November 4, 2025
