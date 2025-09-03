# CSS Troubleshooting Guide - CloudDogg MCP

## 🚨 **Issue**: CSS not working on http://169.254.208.51:3002

## ✅ **Fixes Applied**

### 1. **Content Security Policy (CSP) Updated**
- **Problem**: CSP was too restrictive for development environment
- **Fix**: Added development-specific CSP rules allowing local IP addresses
- **File**: `next.config.ts`

### 2. **Theme Script Strategy Changed**
- **Problem**: `beforeInteractive` strategy not recommended outside `_document.js`
- **Fix**: Changed to `afterInteractive` strategy
- **File**: `components/theme-script.tsx`

### 3. **Fallback Styles Added**
- **Problem**: No fallback if CSS fails to load
- **Fix**: Added inline fallback styles in layout
- **File**: `app/layout.tsx`

### 4. **CSS Debug Component Added**
- **Problem**: No way to diagnose CSS loading issues
- **Fix**: Added debug component showing CSS/Tailwind status
- **File**: `components/css-debug.tsx`

### 5. **Development Server Script**
- **Problem**: Server might not be bound to correct host
- **Fix**: Created script to start server with proper host binding
- **File**: `start-dev-server.sh`

---

## 🔧 **How to Fix CSS Issues**

### **Step 1: Restart Development Server**
```bash
# Use the new startup script
./start-dev-server.sh

# OR manually with host binding
npm run dev -- --hostname 0.0.0.0 --port 3002
```

### **Step 2: Check CSS Debug Indicator**
- Look for the debug box in the top-right corner
- ✅ Green = CSS working
- ❌ Red = CSS not loading

### **Step 3: Clear Browser Cache**
```bash
# Hard refresh in browser
Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows/Linux)

# Or clear browser cache completely
```

### **Step 4: Check Browser Console**
1. Open Developer Tools (F12)
2. Check Console tab for errors
3. Check Network tab for failed CSS requests
4. Look for CSP violations

### **Step 5: Verify Tailwind Configuration**
```bash
# Rebuild Tailwind CSS
npm run build

# Check if Tailwind is working
# Look for classes like bg-blue-500, text-white, etc.
```

---

## 🐛 **Common Issues & Solutions**

### **Issue 1: CSP Blocking CSS**
**Symptoms**: CSS files fail to load, CSP errors in console
**Solution**: 
- Development CSP now allows local IPs
- Check `next.config.ts` CSP configuration

### **Issue 2: Host Binding Issues**
**Symptoms**: Server accessible on localhost but not on IP address
**Solution**:
```bash
# Start with host binding
npm run dev -- --hostname 0.0.0.0 --port 3002
```

### **Issue 3: Tailwind Not Compiling**
**Symptoms**: HTML loads but no styling applied
**Solution**:
```bash
# Clear Next.js cache
rm -rf .next

# Restart development server
npm run dev
```

### **Issue 4: Theme Script Conflicts**
**Symptoms**: Page loads but theme switching doesn't work
**Solution**: 
- Theme script now uses `afterInteractive` strategy
- Fallback styles ensure basic styling works

### **Issue 5: Browser Cache Issues**
**Symptoms**: Old styles persist after changes
**Solution**:
```bash
# Hard refresh
Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows/Linux)

# Disable cache in DevTools
# DevTools > Network tab > Disable cache checkbox
```

---

## 🔍 **Debugging Steps**

### **1. Check CSS Debug Component**
- Green indicator = CSS working
- Red indicator = CSS not loading
- Shows current hostname

### **2. Browser Developer Tools**
```javascript
// Check if CSS custom property is set
getComputedStyle(document.body).getPropertyValue('--css-loaded')

// Check if Tailwind classes exist
document.querySelector('.bg-blue-500') !== null
```

### **3. Network Tab Analysis**
- Look for failed requests to CSS files
- Check if `_next/static/css/` files are loading
- Verify response codes (should be 200)

### **4. Console Errors**
Common error patterns:
- CSP violations: `Refused to load...`
- Network errors: `Failed to fetch...`
- Tailwind errors: `Unknown at rule @tailwind`

---

## 🚀 **Quick Start Commands**

```bash
# 1. Start development server with proper host binding
./start-dev-server.sh

# 2. If script doesn't work, manual start:
npm run dev -- --hostname 0.0.0.0 --port 3002

# 3. Clear cache if needed
rm -rf .next && npm run dev

# 4. Check if build works
npm run build
```

---

## 📋 **Verification Checklist**

- [ ] Development server starts without errors
- [ ] CSS debug indicator shows green
- [ ] Browser console has no CSS-related errors
- [ ] Tailwind classes are applying (check with DevTools)
- [ ] Theme switching works
- [ ] Page loads with proper styling
- [ ] No CSP violations in console

---

## 🆘 **If Issues Persist**

1. **Check Network Configuration**
   - Ensure port 3002 is not blocked by firewall
   - Verify IP address 169.254.208.51 is accessible

2. **Try Different Browsers**
   - Test in Chrome, Firefox, Safari
   - Use incognito/private mode

3. **Check System Resources**
   - Ensure sufficient memory for Node.js
   - Check if other processes are using port 3002

4. **Fallback Options**
   - Try different port: `npm run dev -- --port 3000`
   - Use localhost: `http://localhost:3002`
   - Use 127.0.0.1: `http://127.0.0.1:3002`

---

**🎯 The CSS should now be working properly with these fixes!**
