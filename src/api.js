// ============================================
// API BASE URL - ADMIN PANEL KA LIVE LINK
// ============================================
const API_BASE = 'https://dr-vinish-adminpanel.netlify.app/api/public';

// ============================================
// 1. BLOGS
// ============================================
export const getBlogs = async () => {
  const res = await fetch(`${API_BASE}/blogs`);
  return res.json();
};

// ============================================
// 2. GALLERY
// ============================================
export const getGallery = async () => {
  const res = await fetch(`${API_BASE}/gallery`);
  return res.json();
};

// ============================================
// 3. BOOK APPOINTMENT
// ============================================
export const bookAppointment = async (data) => {
  const res = await fetch(`${API_BASE}/appointments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
};

// ============================================
// 4. ASK YOUR PROBLEM
// ============================================
export const submitProblem = async (data) => {
  const res = await fetch(`${API_BASE}/problems`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
};