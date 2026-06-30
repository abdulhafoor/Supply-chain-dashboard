# Supply Chain Defense Dashboard

A React-based dashboard for monitoring container supply chain defense alerts.

## ✨ Features
- Real-time alerts from Node.js monitor service
- Severity color coding (INFO, WARNING, CRITICAL)
- Bar chart visualization of alert counts
- Filter alerts by severity
- Auto-refresh every 5 seconds

## ⚙️ Backend Setup
Run the monitor service:
```bash
docker compose up monitor

💻 Frontend Setup
cd supply-chain-dashboard
npm install
npm start

📊 Demo
![Dashboard Screenshot](Screenshot.png)


🛠 Tech Stack
Node.js (backend monitor)

React (frontend dashboard)

Docker Compose (lab orchestration)

Chart.js (visualization)

👨‍💻 Author
Built by Yasin as part of a cybersecurity supply chain defense lab project.

Code

---

### 2. Add Screenshot
- Take a screenshot of your running dashboard (alerts table + chart).  
- Save it as `screenshot.png` in the **root folder** of your project (same place as `README.md`).  

---

### 3. Commit and Push
Run these commands:
```bash
git add README.md screenshot.png
git commit -m "Finalize README and add dashboard screenshot"
git push
4. Verify on GitHub
Go to your repo: https://github.com/abdulhafoor/Supply-chain-dashboard

Check that:

README shows your custom content.

Screenshot displays under the Demo section.