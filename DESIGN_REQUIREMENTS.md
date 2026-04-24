# Design Assets - Chiêm Tinh Học App

Danh sách chi tiết các icon, element, và hình ảnh cần chuẩn bị cho mỗi feature.

---

## 🏠 Trang Chủ (Home)

### Navigation Bar
- Logo icon: ⭐ (hoặc custom)
- Menu hamburger icon (mobile)
- Close menu icon (mobile)

### Hero Section
- Header icon: ✨

### Feature Cards (4 cards)
- Lá Số Tử Vi: ♈ icon
- Hợp Tuổi: ♾ icon
- Pha Mặt Trăng: 🌙 icon
- Hành Tinh Hiện Tại: ⭐ icon

### Button
- "Khám Phá Ngay →" (gradient purple-gold)

### Footer
- ⭐ icon

---

## 📊 Lá Số Tử Vi (Birth Chart)

### Form
- Input fields styling (text, number, dropdown)
- Submit button: "Xem Kết Quả" → "Đang tính toán..." (loading state)

### Results
- SVG chart container (circular zodiac chart)
- Sun icon: ☀️
- Moon icon: 🌙
- Ascendant icon: ↗️
- 12 Zodiac symbols: ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓
- Data table
- JSON viewer

---

## 💕 Hợp Tuổi (Compatibility)

### Form
- Input fields styling (2 sets for 2 people)
- Submit button: "Xem Kết Quả" → "Đang tính toán..." (loading state)

### Results - Score Display
- Circular progress indicator (SVG) with color coding:
  - < 40: Red (#ef4444)
  - 40-60: Yellow (#eab308)
  - 60-80: Orange (#f59e0b)
  - ≥ 80: Gold (#c9a84c)
- Dynamic emoji based on score:
  - 💔 (score < 40)
  - 💛 (score 40-60)
  - 🧡 (score 60-80)
  - 💛✨ (score ≥ 80)

### Results - Breakdown List
- Cards for each breakdown item
- Data table

### Results - Aspects List
- Cards for each aspect
- Data table

### Results - JSON Viewer
- JSON tree view

---

## 🌙 Pha Mặt Trăng (Moon Phase)

### Form
- Input fields styling
- Submit button: "Xem Pha Trăng" → "Đang tính toán..." (loading state)

### Results - Main Display
- Moon emoji (large):
  - 🌑 (New Moon - Trăng Mới)
  - 🌒 (Waxing Crescent - Trăng Lưỡi Liềm Mọc)
  - 🌓 (First Quarter - Trăng Quý Một)
  - 🌔 (Waxing Gibbous - Trăng Gần Tròn Mọc)
  - 🌕 (Full Moon - Trăng Tròn)
  - 🌖 (Waning Gibbous - Trăng Gần Tròn Giảm)
  - 🌗 (Last Quarter - Trăng Quý Ba)
  - 🌘 (Waning Crescent - Trăng Lưỡi Liềm Giảm)

### Results - Illumination Bar
- Progress bar with gradient fill (cosmic-gold to cosmic-purple-light)

### Results - Moon Phases Reference Grid
- 8 moon emoji icons (🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘)
- Vietnamese phase names

### Results - Data Table
- Data table display

### Results - JSON Viewer
- JSON tree view

---

## 🪐 Hành Tinh Hiện Tại (Transit)

### Form
- Input fields styling
- Submit button: "Xem Hành Tinh" → "Đang tính toán..." (loading state)

### Results
- SVG transit chart container
- Data table
- JSON viewer

---

## 🎨 Common UI Elements

### Icons/Emojis Used
- ⭐ (Star - Logo, navigation)
- ✨ (Sparkle - Hero section)
- ☀️ (Sun - Birth chart)
- 🌙 (Moon - Birth chart, moon phase)
- ↗️ (Arrow ascending - Ascendant sign)
- ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ (Zodiac symbols - 12)
- ♾ (Infinity - Compatibility)
- 🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘 (Moon phases - 8)
- 💔 💛 🧡 ✨ (Emotions - Compatibility indicator)
- ⏳ (Hourglass - Loading state)
- ⚠️ (Warning - Error message)
- ☰ (Hamburger - Mobile menu open)
- ✕ (Close - Mobile menu close)

### Visual Elements
- Gradient buttons (purple to gold)
- Glow cards (dark background with gold border + shadow)
- Loading spinner (double ring animation)
- Error message box (red background)
- Data tables
- JSON tree viewer
- SVG chart containers with zoom functionality
- Progress bar (circular for compatibility score)
- Progress bar (linear for moon illumination)
- Form inputs (dark with gold focus border)

### Styling/Effects
- Gradient: purple (#7c3aed) to gold (#c9a84c)
- Gold glow effect on cards
- Purple glow effect on buttons
- Hover states for buttons and cards
- Loading animation for spinner
- Focus states for inputs
- Smooth transitions and animations

---

## 📱 Responsive Elements
- Hamburger menu icon (mobile navigation)
- Close menu icon (mobile navigation)
- Responsive grid layouts for cards
- Mobile-first design approach
