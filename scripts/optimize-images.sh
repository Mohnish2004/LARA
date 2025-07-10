#!/bin/bash

# Image Optimization Script for LARA Lab Website
# This script optimizes images for web use while maintaining quality

echo "🖼️  LARA Lab Image Optimizer"
echo "==============================="

# Create optimized directory if it doesn't exist
mkdir -p public/optimized

# Function to optimize images
optimize_image() {
    input_file=$1
    output_file=$2
    max_size=$3
    quality=$4
    
    echo "📸 Optimizing: $input_file"
    echo "   → Output: $output_file"
    echo "   → Max size: ${max_size}px"
    echo "   → Quality: ${quality}%"
    
    sips -Z $max_size --setProperty formatOptions $quality "$input_file" --out "$output_file"
    
    # Get file sizes
    original_size=$(ls -lh "$input_file" | awk '{print $5}')
    optimized_size=$(ls -lh "$output_file" | awk '{print $5}')
    
    echo "   ✅ Original: $original_size → Optimized: $optimized_size"
    echo ""
}

# Optimize large images (hero images, banners)
echo "🎯 Optimizing large images..."
for file in public/*.{jpg,jpeg,png}; do
    if [[ -f "$file" ]]; then
        filename=$(basename "$file")
        name="${filename%.*}"
        
        # Get file size in bytes
        size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        
        # If file is larger than 1MB, optimize it
        if [[ $size -gt 1048576 ]]; then
            optimize_image "$file" "public/${name}_optimized.jpg" 1920 75
        fi
    fi
done

# Optimize profile images (smaller images)
echo "👤 Optimizing profile images..."
for file in public/pics/*.{jpg,jpeg,png}; do
    if [[ -f "$file" ]]; then
        filename=$(basename "$file")
        name="${filename%.*}"
        
        # Optimize profile images to 400px max
        optimize_image "$file" "public/pics/${name}_optimized.jpg" 400 85
    fi
done

echo "🎉 Image optimization complete!"
echo ""
echo "📊 Summary:"
echo "   - Large images optimized to max 1920px, 75% quality"
echo "   - Profile images optimized to max 400px, 85% quality"
echo "   - Optimized files saved with '_optimized' suffix"
echo ""
echo "💡 Next steps:"
echo "   - Update your code to use the optimized image files"
echo "   - Consider using Next.js Image component for automatic optimization"
echo "   - Test your website loading speed" 