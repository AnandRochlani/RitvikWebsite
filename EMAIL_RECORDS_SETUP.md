# Email Records Setup Guide (DMARC & SPF)

## Overview

DMARC (Domain-based Message Authentication, Reporting & Conformance) and SPF (Sender Policy Framework) are DNS records that help:
- **Improve email deliverability** - Prevents your emails from being marked as spam
- **Combat email spoofing** - Protects your domain from being used in phishing attacks
- **Build domain reputation** - Shows email providers that you're a legitimate sender

## Important Note

These records must be configured in your **DNS settings** (not in your website code). You'll need access to your domain's DNS management panel (usually through your domain registrar or hosting provider).

---

## SPF Record Setup

### What is SPF?

SPF (Sender Policy Framework) tells email servers which IP addresses and servers are authorized to send emails on behalf of your domain.

### How to Add SPF Record

1. **Log into your DNS management panel** (e.g., Hostinger, GoDaddy, Cloudflare, etc.)

2. **Add a TXT record** with the following:

   ```
   Type: TXT
   Name: @ (or your domain name, e.g., anandrochlani.com)
   Value: v=spf1 include:_spf.google.com ~all
   TTL: 3600 (or default)
   ```

3. **Common SPF Record Examples:**

   **If you use Gmail/Google Workspace:**
   ```
   v=spf1 include:_spf.google.com ~all
   ```

   **If you use multiple email services:**
   ```
   v=spf1 include:_spf.google.com include:mail.hostinger.com ~all
   ```

   **If you don't send emails (most restrictive):**
   ```
   v=spf1 -all
   ```

4. **SPF Record Components:**
   - `v=spf1` - SPF version 1
   - `include:_spf.google.com` - Authorizes Google's mail servers
   - `~all` - Soft fail (emails from unauthorized servers are marked as suspicious but not rejected)
   - `-all` - Hard fail (emails from unauthorized servers are rejected)

5. **Wait for DNS propagation** (usually 15 minutes to 48 hours)

---

## DMARC Record Setup

### What is DMARC?

DMARC (Domain-based Message Authentication, Reporting & Conformance) tells email servers what to do with emails that fail SPF or DKIM checks.

### Prerequisites

Before setting up DMARC, you should have:
- ✅ SPF record configured (see above)
- ✅ DKIM record configured (if using email services like Gmail/Google Workspace)

### How to Add DMARC Record

1. **Log into your DNS management panel**

2. **Add a TXT record** with the following:

   ```
   Type: TXT
   Name: _dmarc (note the underscore prefix)
   Value: v=DMARC1; p=none; rua=mailto:your-email@anandrochlani.com
   TTL: 3600 (or default)
   ```

3. **DMARC Record Examples:**

   **Monitoring mode (recommended to start):**
   ```
   v=DMARC1; p=none; rua=mailto:dmarc@anandrochlani.com; ruf=mailto:dmarc@anandrochlani.com; fo=1
   ```

   **Quarantine mode (after monitoring):**
   ```
   v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc@anandrochlani.com
   ```

   **Reject mode (strictest, after testing):**
   ```
   v=DMARC1; p=reject; pct=100; rua=mailto:dmarc@anandrochlani.com
   ```

4. **DMARC Record Components:**
   - `v=DMARC1` - DMARC version 1
   - `p=none` - Policy: no action (monitoring only)
   - `p=quarantine` - Policy: send to spam folder
   - `p=reject` - Policy: reject email
   - `pct=100` - Percentage of emails to apply policy to (100 = all)
   - `rua=mailto:...` - Email address for aggregate reports
   - `ruf=mailto:...` - Email address for forensic reports
   - `fo=1` - Failure reporting options

5. **Wait for DNS propagation** (usually 15 minutes to 48 hours)

---

## Step-by-Step Setup Process

### Step 1: Determine Your Email Setup

- **Do you send emails from this domain?**
  - If **YES**: You need SPF and DMARC records
  - If **NO**: You can set restrictive records to prevent spoofing

- **What email service do you use?**
  - Gmail/Google Workspace
  - Hostinger Email
  - Custom email server
  - No email service

### Step 2: Set Up SPF Record

1. Identify your email service provider
2. Create appropriate SPF record
3. Add TXT record in DNS
4. Wait for propagation

### Step 3: Set Up DMARC Record

1. Start with monitoring mode (`p=none`)
2. Monitor reports for 2-4 weeks
3. Gradually move to quarantine (`p=quarantine`)
4. Finally move to reject (`p=reject`) if everything looks good

### Step 4: Verify Setup

Use these tools to verify your records:
- **SPF Checker**: https://mxtoolbox.com/spf.aspx
- **DMARC Checker**: https://mxtoolbox.com/dmarc.aspx
- **DNS Checker**: https://dnschecker.org/

---

## Common DNS Providers

### Hostinger
1. Log into Hostinger hPanel
2. Go to **Domains** → **DNS Zone Editor**
3. Add TXT records as described above

### Cloudflare
1. Log into Cloudflare dashboard
2. Select your domain
3. Go to **DNS** → **Records**
4. Add TXT records

### GoDaddy
1. Log into GoDaddy account
2. Go to **My Products** → **DNS**
3. Add TXT records

### Namecheap
1. Log into Namecheap account
2. Go to **Domain List** → **Manage** → **Advanced DNS**
3. Add TXT records

---

## Recommended Configuration for anandrochlani.com

### If Using Gmail/Google Workspace:

**SPF Record:**
```
Type: TXT
Name: @
Value: v=spf1 include:_spf.google.com ~all
```

**DMARC Record:**
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:dmarc@anandrochlani.com; ruf=mailto:dmarc@anandrochlani.com; fo=1
```

### If Not Sending Emails:

**SPF Record:**
```
Type: TXT
Name: @
Value: v=spf1 -all
```

**DMARC Record:**
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=reject; pct=100; rua=mailto:admin@anandrochlani.com
```

---

## Testing & Verification

After adding the records:

1. **Wait 15 minutes to 48 hours** for DNS propagation

2. **Verify SPF Record:**
   ```bash
   nslookup -type=TXT anandrochlani.com
   ```
   Or use: https://mxtoolbox.com/spf.aspx

3. **Verify DMARC Record:**
   ```bash
   nslookup -type=TXT _dmarc.anandrochlani.com
   ```
   Or use: https://mxtoolbox.com/dmarc.aspx

4. **Check DNS Propagation:**
   - https://dnschecker.org/
   - Enter your domain and select TXT record type

---

## Troubleshooting

### SPF Record Issues

- **"SPF record not found"**: Wait longer for DNS propagation
- **"SPF record too long"**: SPF records have a 255 character limit per string. Use multiple strings if needed
- **"Invalid SPF syntax"**: Double-check your record format

### DMARC Record Issues

- **"DMARC record not found"**: Make sure you're using `_dmarc` (with underscore) as the name
- **"Invalid DMARC syntax"**: Check that all components are properly formatted
- **"No reports received"**: This is normal if you're not sending emails. Reports only come when emails are sent

---

## Additional Resources

- **SPF Record Syntax**: https://www.openspf.org/SPF_Record_Syntax
- **DMARC Specification**: https://dmarc.org/
- **Email Authentication Guide**: https://www.dmarcanalyzer.com/dmarc-guide/

---

## Important Notes

1. **DNS Propagation**: Changes can take 15 minutes to 48 hours to propagate globally
2. **Start with Monitoring**: Always start DMARC in monitoring mode (`p=none`) before enforcing
3. **Monitor Reports**: Check your DMARC report email regularly to ensure legitimate emails aren't being blocked
4. **One Record Per Type**: You can only have one SPF and one DMARC record per domain
5. **Case Sensitive**: DNS records are case-insensitive, but it's good practice to use lowercase

---

## Next Steps

1. ✅ Determine your email setup
2. ✅ Add SPF record to DNS
3. ✅ Add DMARC record to DNS (start with `p=none`)
4. ✅ Verify records are active
5. ✅ Monitor DMARC reports for 2-4 weeks
6. ✅ Gradually increase DMARC policy strictness

---

**Note**: These records are configured at the DNS level, not in your website code. You'll need access to your domain's DNS management panel to add these records.
