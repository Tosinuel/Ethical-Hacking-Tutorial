const tutorials = [
  // Beginner Level
  {
    id: 1,
    level: 'beginner',
    title: 'Introduction to Ethical Hacking',
    description: 'Learn the basics of ethical hacking and its importance in cybersecurity.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400',
    content: `
      <h2>Introduction to Ethical Hacking</h2>
      <p>Ethical hacking, also known as white-hat hacking, involves legally breaking into systems to identify vulnerabilities. This practice helps organizations strengthen their security.</p>
      <h3>Key Concepts:</h3>
      <ul>
        <li>Legal and ethical considerations</li>
        <li>Types of hackers (white-hat, black-hat, gray-hat)</li>
        <li>Basic cybersecurity principles</li>
      </ul>
      <h3>Getting Started:</h3>
      <p>To begin your ethical hacking journey, familiarize yourself with basic networking concepts and operating systems like Linux.</p>
      <pre><code>echo "Hello, Ethical Hacker!"</code></pre>
    `
  },
  {
    id: 2,
    level: 'beginner',
    title: 'Setting Up Your Hacking Environment',
    description: 'Install and configure tools like Kali Linux for ethical hacking.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400',
    content: `
      <h2>Setting Up Your Hacking Environment</h2>
      <p>Kali Linux is the go-to operating system for ethical hackers. It comes pre-installed with hundreds of security tools.</p>
      <h3>Installation Steps:</h3>
      <ol>
        <li>Download Kali Linux ISO from official website</li>
        <li>Create a bootable USB drive</li>
        <li>Install on a virtual machine or dedicated hardware</li>
      </ol>
      <h3>Essential Tools:</h3>
      <ul>
        <li>Nmap for network scanning</li>
        <li>Wireshark for packet analysis</li>
        <li>Metasploit for exploitation</li>
      </ul>
      <pre><code>sudo apt update && sudo apt install nmap</code></pre>
    `
  },
  {
    id: 3,
    level: 'beginner',
    title: 'Basic Networking Concepts',
    description: 'Understand IP addresses, ports, protocols, and network fundamentals.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400',
    content: `
      <h2>Basic Networking Concepts</h2>
      <p>Networking knowledge is crucial for ethical hackers. Learn about IP addresses, subnets, and common protocols.</p>
      <h3>Key Topics:</h3>
      <ul>
        <li>IP addressing (IPv4 and IPv6)</li>
        <li>TCP/IP model</li>
        <li>Common ports (80, 443, 22, etc.)</li>
        <li>Network devices (routers, switches, firewalls)</li>
      </ul>
      <h3>Practical Exercise:</h3>
      <p>Use the ping command to test connectivity:</p>
      <pre><code>ping google.com</code></pre>
    `
  },
  {
    id: 4,
    level: 'beginner',
    title: 'Introduction to Linux Commands',
    description: 'Master essential Linux commands for ethical hacking tasks.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400',
    content: `
      <h2>Introduction to Linux Commands</h2>
      <p>Linux is the preferred OS for hackers. Learn basic commands to navigate and manipulate files.</p>
      <h3>Essential Commands:</h3>
      <ul>
        <li>ls - list directory contents</li>
        <li>cd - change directory</li>
        <li>mkdir - create directory</li>
        <li>rm - remove files/directories</li>
        <li>chmod - change file permissions</li>
      </ul>
      <h3>File Permissions:</h3>
      <p>Understand read (r), write (w), execute (x) permissions for user, group, and others.</p>
      <pre><code>ls -la</code></pre>
    `
  },
  {
    id: 5,
    level: 'beginner',
    title: 'Understanding Web Applications',
    description: 'Learn about web technologies, HTTP/HTTPS, and common vulnerabilities.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
    content: `
      <h2>Understanding Web Applications</h2>
      <p>Web applications are common targets. Understand how they work and potential security issues.</p>
      <h3>Web Fundamentals:</h3>
      <ul>
        <li>HTTP vs HTTPS</li>
        <li>Client-server model</li>
        <li>Cookies and sessions</li>
        <li>Common web vulnerabilities (SQL injection, XSS)</li>
      </ul>
      <h3>Tools to Learn:</h3>
      <ul>
        <li>Burp Suite for web app testing</li>
        <li>OWASP ZAP as an alternative</li>
      </ul>
      <pre><code>curl -I https://example.com</code></pre>
    `
  },

  // Intermediate Level
  {
    id: 6,
    level: 'intermediate',
    title: 'Network Scanning with Nmap',
    description: 'Master Nmap for discovering hosts, services, and vulnerabilities.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400',
    content: `
      <h2>Network Scanning with Nmap</h2>
      <p>Nmap is a powerful network scanning tool used to discover hosts and services on a network.</p>
      <h3>Basic Scans:</h3>
      <ul>
        <li>Host discovery: nmap -sn 192.168.1.0/24</li>
        <li>Port scanning: nmap -p 1-1000 target.com</li>
        <li>Service detection: nmap -sV target.com</li>
      </ul>
      <h3>Advanced Techniques:</h3>
      <ul>
        <li>OS fingerprinting: nmap -O target.com</li>
        <li>Script scanning: nmap --script vuln target.com</li>
        <li>Firewall evasion: nmap -D RND:10 target.com</li>
      </ul>
      <pre><code>nmap -A -T4 scanme.nmap.org</code></pre>
    `
  },
  {
    id: 7,
    level: 'intermediate',
    title: 'Vulnerability Assessment',
    description: 'Learn to identify and assess vulnerabilities in systems and applications.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400',
    content: `
      <h2>Vulnerability Assessment</h2>
      <p>Vulnerability assessment involves identifying, quantifying, and prioritizing vulnerabilities in a system.</p>
      <h3>Assessment Process:</h3>
      <ol>
        <li>Asset identification</li>
        <li>Vulnerability scanning</li>
        <li>Risk assessment</li>
        <li>Report generation</li>
      </ol>
      <h3>Common Tools:</h3>
      <ul>
        <li>OpenVAS for vulnerability scanning</li>
        <li>Nessus for enterprise scanning</li>
        <li>Nikto for web server scanning</li>
      </ul>
      <h3>CVSS Scoring:</h3>
      <p>Learn to calculate Common Vulnerability Scoring System scores to prioritize fixes.</p>
    `
  },
  {
    id: 8,
    level: 'intermediate',
    title: 'Password Cracking Techniques',
    description: 'Understand different methods for cracking passwords ethically.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400',
    content: `
      <h2>Password Cracking Techniques</h2>
      <p>Password cracking is a crucial skill for ethical hackers to test password strength.</p>
      <h3>Cracking Methods:</h3>
      <ul>
        <li>Dictionary attacks</li>
        <li>Brute force attacks</li>
        <li>Rainbow table attacks</li>
        <li>Hybrid attacks</li>
      </ul>
      <h3>Tools:</h3>
      <ul>
        <li>John the Ripper</li>
        <li>Hashcat</li>
        <li>Hydra for online attacks</li>
      </ul>
      <h3>Ethical Considerations:</h3>
      <p>Always obtain permission before attempting to crack passwords. Use strong, unique passwords yourself.</p>
      <pre><code>john --wordlist=rockyou.txt hashes.txt</code></pre>
    `
  },
  {
    id: 9,
    level: 'intermediate',
    title: 'Web Application Security',
    description: 'Dive deep into common web vulnerabilities and how to exploit them.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
    content: `
      <h2>Web Application Security</h2>
      <p>Web applications are prime targets for attackers. Learn to identify and exploit common vulnerabilities.</p>
      <h3>Common Vulnerabilities:</h3>
      <ul>
        <li>SQL Injection</li>
        <li>Cross-Site Scripting (XSS)</li>
        <li>Cross-Site Request Forgery (CSRF)</li>
        <li>Insecure Direct Object References</li>
      </ul>
      <h3>Testing Tools:</h3>
      <ul>
        <li>Burp Suite</li>
        <li>OWASP ZAP</li>
        <li>sqlmap for SQL injection</li>
      </ul>
      <h3>Prevention:</h3>
      <p>Learn secure coding practices like input validation, parameterized queries, and proper session management.</p>
    `
  },
  {
    id: 10,
    level: 'intermediate',
    title: 'Wireless Network Security',
    description: 'Learn about Wi-Fi security, WPA cracking, and wireless attacks.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400',
    content: `
      <h2>Wireless Network Security</h2>
      <p>Wireless networks present unique security challenges. Learn to assess and secure Wi-Fi networks.</p>
      <h3>Wi-Fi Standards:</h3>
      <ul>
        <li>WEP (insecure)</li>
        <li>WPA2</li>
        <li>WPA3</li>
      </ul>
      <h3>Common Attacks:</h3>
      <ul>
        <li>WPA2 cracking with aircrack-ng</li>
        <li>Evil twin attacks</li>
        <li>Deauthentication attacks</li>
      </ul>
      <h3>Tools:</h3>
      <ul>
        <li>aircrack-ng suite</li>
        <li>Wireshark for packet capture</li>
        <li>Reaver for WPS attacks</li>
      </ul>
      <pre><code>airmon-ng start wlan0</code></pre>
    `
  },

  // Advanced Level
  {
    id: 11,
    level: 'advanced',
    title: 'Exploit Development',
    description: 'Learn to write and customize exploits for known vulnerabilities.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400',
    content: `
      <h2>Exploit Development</h2>
      <p>Exploit development involves creating code to take advantage of software vulnerabilities.</p>
      <h3>Exploit Types:</h3>
      <ul>
        <li>Buffer overflow exploits</li>
        <li>Format string exploits</li>
        <li>Race condition exploits</li>
        <li>Use-after-free exploits</li>
      </ul>
      <h3>Development Process:</h3>
      <ol>
        <li>Vulnerability research</li>
        <li>Proof-of-concept development</li>
        <li>Exploit refinement</li>
        <li>Payload creation</li>
      </ol>
      <h3>Languages:</h3>
      <ul>
        <li>Python for scripting</li>
        <li>C/C++ for low-level exploits</li>
        <li>Assembly for shellcode</li>
      </ul>
      <h3>Tools:</h3>
      <ul>
        <li>GDB debugger</li>
        <li>pwntools Python library</li>
        <li>Metasploit for framework-based exploits</li>
      </ul>
    `
  },
  {
    id: 12,
    level: 'advanced',
    title: 'Advanced Penetration Testing',
    description: 'Master the art of comprehensive penetration testing methodologies.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400',
    content: `
      <h2>Advanced Penetration Testing</h2>
      <p>Penetration testing simulates real-world attacks to identify security weaknesses.</p>
      <h3>PT Methodology:</h3>
      <ol>
        <li>Reconnaissance</li>
        <li>Scanning</li>
        <li>Gaining Access</li>
        <li>Maintaining Access</li>
        <li>Covering Tracks</li>
        <li>Reporting</li>
      </ol>
      <h3>Advanced Techniques:</h3>
      <ul>
        <li>Client-side attacks</li>
        <li>Advanced persistent threats (APT)</li>
        <li>Zero-day exploitation</li>
        <li>Supply chain attacks</li>
      </ul>
      <h3>Certifications:</h3>
      <ul>
        <li>OSCP (Offensive Security Certified Professional)</li>
        <li>CEH (Certified Ethical Hacker)</li>
        <li>GPEN (GIAC Penetration Tester)</li>
      </ul>
    `
  },
  {
    id: 13,
    level: 'advanced',
    title: 'Reverse Engineering',
    description: 'Learn to analyze and understand compiled software and malware.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
    content: `
      <h2>Reverse Engineering</h2>
      <p>Reverse engineering involves analyzing software to understand its design and functionality.</p>
      <h3>Techniques:</h3>
      <ul>
        <li>Static analysis</li>
        <li>Dynamic analysis</li>
        <li>Decompilation</li>
        <li>Disassembly</li>
      </ul>
      <h3>Tools:</h3>
      <ul>
        <li>IDA Pro</li>
        <li>Ghidra (free alternative)</li>
        <li>OllyDbg</li>
        <li>Radare2</li>
      </ul>
      <h3>Applications:</h3>
      <ul>
        <li>Malware analysis</li>
        <li>Vulnerability research</li>
        <li>Software cracking (ethical only)</li>
        <li>Understanding proprietary protocols</li>
      </ul>
      <h3>Languages to Learn:</h3>
      <ul>
        <li>x86/x64 Assembly</li>
        <li>C/C++</li>
        <li>Python for automation</li>
      </ul>
    `
  },
  {
    id: 14,
    level: 'advanced',
    title: 'Cloud Security and DevSecOps',
    description: 'Secure cloud environments and integrate security into DevOps pipelines.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400',
    content: `
      <h2>Cloud Security and DevSecOps</h2>
      <p>As more organizations move to the cloud, understanding cloud security is crucial.</p>
      <h3>Cloud Platforms:</h3>
      <ul>
        <li>AWS</li>
        <li>Azure</li>
        <li>GCP</li>
      </ul>
      <h3>Cloud Security Concepts:</h3>
      <ul>
        <li>Identity and Access Management (IAM)</li>
        <li>Encryption at rest and in transit</li>
        <li>Network security groups</li>
        <li>Container security</li>
      </ul>
      <h3>DevSecOps:</h3>
      <ul>
        <li>Security as Code</li>
        <li>Automated security testing</li>
        <li>Continuous security monitoring</li>
        <li>Compliance automation</li>
      </ul>
      <h3>Tools:</h3>
      <ul>
        <li>Terraform for infrastructure as code</li>
        <li>Docker for containerization</li>
        <li>Kubernetes security</li>
        <li>CI/CD security tools (e.g., Snyk, Checkmarx)</li>
      </ul>
    `
  },
  {
    id: 15,
    level: 'advanced',
    title: 'Incident Response and Forensics',
    description: 'Learn to respond to security incidents and perform digital forensics.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400',
    content: `
      <h2>Incident Response and Forensics</h2>
      <p>Incident response involves detecting, responding to, and recovering from security incidents.</p>
      <h3>Incident Response Phases:</h3>
      <ol>
        <li>Preparation</li>
        <li>Identification</li>
        <li>Containment</li>
        <li>Eradication</li>
        <li>Recovery</li>
        <li>Lessons Learned</li>
      </ol>
      <h3>Digital Forensics:</h3>
      <ul>
        <li>Memory forensics</li>
        <li>Disk forensics</li>
        <li>Network forensics</li>
        <li>Mobile forensics</li>
      </ul>
      <h3>Tools:</h3>
      <ul>
        <li>Volatility for memory analysis</li>
        <li>Autopsy for disk forensics</li>
        <li>Wireshark for network forensics</li>
        <li>EnCase or FTK for enterprise forensics</li>
      </ul>
      <h3>Legal Considerations:</h3>
      <p>Always follow proper legal procedures and chain of custody when handling evidence.</p>
    `
  }
];

export default tutorials;
