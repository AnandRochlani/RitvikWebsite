# HTTP/2 Verification Guide

## Quick Verification Steps

### 1. Browser DevTools (Easiest Method)

1. Open your website: `https://www.anandrochlani.com`
2. Press `F12` or `Right-click → Inspect`
3. Go to the **Network** tab
4. Reload the page (`Ctrl+R` or `Cmd+R`)
5. Right-click on any column header
6. Check **"Protocol"** to show the protocol column
7. Look for requests showing **"h2"** (HTTP/2) or **"http/2"**

**Expected Result:**
- All requests should show `h2` or `http/2`
- If you see `http/1.1`, HTTP/2 is not enabled

### 2. Online HTTP/2 Test Tools

#### KeyCDN HTTP/2 Test
- Visit: https://tools.keycdn.com/http2-test
- Enter your domain: `www.anandrochlani.com`
- Click "Test"
- **Expected**: ✅ "HTTP/2 supported"

#### HTTP/2 Check
- Visit: https://http2.pro/check
- Enter your domain: `www.anandrochlani.com`
- **Expected**: ✅ "HTTP/2 is supported"

#### SSL Labs Test
- Visit: https://www.ssllabs.com/ssltest/
- Enter your domain: `www.anandrochlani.com`
- Look for "Protocols" section
- **Expected**: "TLS 1.2, TLS 1.3" and HTTP/2 support

### 3. Command Line Verification

#### Using curl
```bash
curl -I --http2 https://www.anandrochlani.com
```

**Expected Output:**
```
HTTP/2 200
...
```

If you see `HTTP/1.1 200`, HTTP/2 is not enabled.

#### Using openssl (Check ALPN)
```bash
openssl s_client -alpn h2 -connect www.anandrochlani.com:443 -servername www.anandrochlani.com
```

**Expected Output:**
```
ALPN protocol: h2
```

### 4. Chrome DevTools Protocol Check

1. Open Chrome DevTools
2. Go to **Network** tab
3. Click on any request
4. Open the **Headers** tab
5. Look for `:status` header (HTTP/2 uses pseudo-headers)
6. Check the **Protocol** field in the request details

## Troubleshooting

### HTTP/2 Not Enabled?

#### For Vercel/Netlify:
- ✅ HTTP/2 is **automatically enabled** with HTTPS
- If not working, check:
  1. Site is using HTTPS (not HTTP)
  2. Site is deployed (not just localhost)
  3. Clear browser cache and test again

#### For Hostinger/cPanel:
1. **Check SSL Certificate:**
   - Log in to cPanel
   - Go to "SSL/TLS Status"
   - Ensure SSL is active and valid

2. **Contact Support:**
   - Ask Hostinger to enable HTTP/2
   - Some plans may require upgrade

3. **Use Cloudflare (Free):**
   - Sign up at cloudflare.com
   - Add your domain
   - Update nameservers
   - Cloudflare enables HTTP/2 automatically

#### For Self-Hosted Servers:

**Apache:**
```bash
# Check if mod_http2 is enabled
apache2ctl -M | grep http2

# If not enabled:
sudo a2enmod http2
sudo systemctl restart apache2
```

**Nginx:**
```nginx
# Ensure http2 is in listen directive
listen 443 ssl http2;
```

## Performance Comparison

### HTTP/1.1 vs HTTP/2

**HTTP/1.1:**
- Sequential requests (one at a time per connection)
- Multiple connections needed for parallel loading
- Higher latency
- Slower page loads

**HTTP/2:**
- Multiplexing (multiple requests over single connection)
- Header compression (HPACK)
- Server push capability
- Binary protocol (more efficient)
- **Result: 20-50% faster page loads**

## Expected Performance Improvements

Once HTTP/2 is enabled, you should see:

1. **Faster Initial Page Load**
   - Reduced latency from multiplexing
   - Parallel resource loading

2. **Better Mobile Performance**
   - HTTP/2 is especially beneficial on mobile networks
   - Reduced connection overhead

3. **Improved PageSpeed Insights Scores**
   - Better Time to First Byte (TTFB)
   - Faster Largest Contentful Paint (LCP)

4. **Better Core Web Vitals**
   - Improved LCP scores
   - Reduced Total Blocking Time (TBT)

## Verification Checklist

- [ ] Site is using HTTPS (not HTTP)
- [ ] Browser DevTools shows `h2` protocol
- [ ] Online test tools confirm HTTP/2 support
- [ ] curl command shows `HTTP/2 200`
- [ ] SSL Labs test shows HTTP/2 support
- [ ] PageSpeed Insights shows improved scores

## Next Steps After Verification

1. ✅ **HTTP/2 Enabled**: Monitor performance improvements
2. ❌ **HTTP/2 Not Enabled**: 
   - Contact hosting provider
   - Or use Cloudflare (free CDN with HTTP/2)
   - Verify SSL certificate is valid

## Additional Resources

- [HTTP/2 Specification](https://http2.github.io/)
- [Can I Use HTTP/2](https://caniuse.com/http2)
- [HTTP/2 Performance Guide](https://www.cloudflare.com/learning/performance/what-is-http2/)
- [Google's HTTP/2 Guide](https://developers.google.com/web/fundamentals/performance/http2)
