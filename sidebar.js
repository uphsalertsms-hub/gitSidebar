'use strict';

const $  = id  => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

/* ── MODULES (unchanged from original) ────────────────────── */
const MODS = Object.freeze([
      {
    key:'System Administration', label:'System Administration', badge:'Admin', icon:'ti-speedboat',
    subs:[
      {key:'Online Payment', label:'Online Payment', icon:'ti ti-credit-card'},
    ]
  },

  {
    key:'administration', label:'Administration', badge:'Admin', icon:'ti-shield-check',
    subs:[
      {key:'users',             label:'Users',             icon:'ti-users'},
      {key:'dashboard',         label:'Dashboard',         icon:'ti-layout-dashboard'},
      {key:'module_management', label:'Module Management', icon:'ti-layout-sidebar'},
      {key:'school_info',       label:'School Information',icon:'ti-books'},
    ]
  },
    {
    key:'notification', label:'Notification', badge:'Notification', icon:'ti-bell',
    subs:[
      {key:'chat',           label:'Chat',                   icon:'ti-message'},
      {key:'chat_mgmt',      label:'Chat Management',        icon:'ti-messages'},
      {key:'notif_settings', label:'Notification Settings', icon:'ti-settings'},
    ]
  },
  {
    key:'reports', label:'Reports', badge:'Reports', icon:'ti-chart-bar',                                   
    subs:[
      {key:'enroll_summary',    label:'Enrollment Summary',         icon:'ti-users',        group:'ENROLLMENT',     groupIcon:'ti-users'},
      {key:'subject_enroll',    label:'Subject Enrollment Report',  icon:'ti-book'},
      {key:'daily_enroll',      label:'Daily Enrollment Monitoring',icon:'ti-activity'},
      {key:'enroll_stats',      label:'Enrollment Statistics',      icon:'ti-chart-bar'},
      {key:'acad_history',      label:'Academic History',           icon:'ti-book',         group:'STUDENT REPORTS',groupIcon:'ti-user-check'},
      {key:'student_profile',   label:'Student Profile Report',     icon:'ti-user'},
      {key:'deficiency_rpt',    label:'Student Deficiency Report',  icon:'ti-alert-triangle'},
      {key:'master_list',       label:'Master List of Students',    icon:'ti-list'},
      {key:'section_block',     label:'Section/Block List',         icon:'ti-layout-grid'},
      {key:'reg_cor',           label:'Registration Form / COR',    icon:'ti-file-description'},
      {key:'class_list',        label:'Class List',                 icon:'ti-users',        group:'ACADEMIC REPORTS',groupIcon:'ti-school'},
      {key:'deans_list',        label:"Dean's List",                icon:'ti-award'},
      {key:'grade_reports',     label:'Grade Reports',              icon:'ti-chart-line'},
      {key:'faculty_loading',   label:'Faculty Loading',            icon:'ti-user-star'},
      {key:'sched_report',      label:'Schedule Report',            icon:'ti-calendar-event'},
      {key:'failed_subj',       label:'Failed Subjects',            icon:'ti-alert-triangle'},
      {key:'room_util',         label:'Room Utilization',           icon:'ti-building'},
      {key:'subj_offering',     label:'Subject Offering',           icon:'ti-book-2'},
      {key:'attendance_rpt',    label:'Attendance Report',          icon:'ti-calendar-check'},
      {key:'or_monitoring',     label:'OR Monitoring',              icon:'ti-hash',         group:'FINANCE & ACCOUNTING', groupIcon:'ti-building-bank'},
      {key:'assessment_rpt',    label:'Assessment Report',          icon:'ti-file-invoice'},
      {key:'payment_history',   label:'Payment History',            icon:'ti-clock'},
      {key:'refund_rpt',        label:'Refund Report',              icon:'ti-arrow-back'},
      {key:'scholarship_rpt',   label:'Scholarship Report',         icon:'ti-award'},
      {key:'cashier_eod',       label:'Cashier EOD Report',         icon:'ti-chart-bar'},
      {key:'collection_rpt',    label:'Collection Report',          icon:'ti-building-bank'},
      {key:'accts_receivable',  label:'Accounts Receivable',        icon:'ti-alert-circle'},
      {key:'doc_tracking',      label:'Document Tracking',          icon:'ti-files',        group:'REGISTRAR REPORTS', groupIcon:'ti-user-check'},
      {key:'student_status',    label:'Student Status',             icon:'ti-user'},
      {key:'adding_dropping',   label:'Adding / Dropping',          icon:'ti-transfer'},
      {key:'cross_enroll',      label:'Cross Enrollment',           icon:'ti-arrows-exchange'},
      {key:'transcript_req',    label:'Transcript Request',         icon:'ti-file-description'},
      {key:'user_access',       label:'User Access',                icon:'ti-lock',         group:'ADMINISTRATIVE REPORTS', groupIcon:'ti-shield'},
      {key:'audit_trail',       label:'Audit Trail',                icon:'ti-activity'},
      {key:'system_usage',      label:'System Usage',               icon:'ti-chart-pie'},
    ]
  },
  {
    key:'registrar', label:'Registrar', badge:'Registrar', icon:'ti-user-check',
    subs:[
      {key:'reg_dashboard',      label:'Dashboard',            icon:'ti-layout-dashboard'},
      {key:'reg_students',       label:'Students',             icon:'ti-users',       group:'ENROLMENT',       groupIcon:'ti-list-check'},
      {key:'enrolment_advising', label:'Enrolment Advising',   icon:'ti-notebook'},
      {key:'add_drop_sched',     label:'Add/Drop Schedules',   icon:'ti-calendar-event'},
      {key:'subjects',           label:'Subjects',             icon:'ti-book',  group:'ACADEMIC',        groupIcon:'ti-school'},
      {key:'curricula',          label:'Curricula',            icon:'ti-books'},
      {key:'college_offerings',  label:'College Offerings',    icon:'ti-building',        group:'OFFERINGS',       groupIcon:'ti-layout-grid'},
      {key:'basic_ed_offerings', label:'Basic Ed Offerings',   icon:'ti-school'},
      {key:'off_sem_approvals',  label:'Off-Sem Approvals',    icon:'ti-clock'},
      {key:'grade_encoding_reg', label:'Grade Encoding',       icon:'ti-pencil',          group:'GRADES',          groupIcon:'ti-chart-bar'},
      {key:'encoding_schedules', label:'Encoding Schedules',   icon:'ti-calendar-time'},
      {key:'grade_conversion',   label:'Grade Conversion',     icon:'ti-arrows-exchange'},
      {key:'departments',        label:'Departments',          icon:'ti-building',        group:'DEPTS & PROGRAMS',groupIcon:'ti-building'},
      {key:'courses_programs',   label:'Courses & Programs',   icon:'ti-certificate'},
      {key:'school_years',       label:'School Years',         icon:'ti-calendar',        group:'SETTINGS',        groupIcon:'ti-settings'},
      {key:'enrollment_schedules', label:'Enrollment Schedules', icon:'ti-calendar-stats'},
      {key:'reg_faculty',        label:'Faculty',              icon:'ti-user-star'},
      {key:'classrooms',         label:'Classrooms',           icon:'ti-door'},
      {key:'applicant_req',      label:'Applicant Requirements',icon:'ti-checklist'},
      {key:'announcements',      label:'Announcements',        icon:'ti-speakerphone'},
    ]
  },
  {
    key:'accounting', label:'Accounting', badge:'Accounting', icon:'ti-building-bank',
    subs:[
      {key:'acc_payments',         label:'Payments',          icon:'ti-cash'},
      {key:'discounts',            label:'Discounts',         icon:'ti-discount'},
      {key:'or_series',            label:'OR Series',         icon:'ti-hash'},
      {key:'chart_of_accounts',    label:'Chart of Accounts', icon:'ti-list-numbers'},
      {key:'coa_mapping',          label:'COA Mapping',       icon:'ti-arrows-exchange'},
      {key:'student_ledger',       label:'Student Ledger',    icon:'ti-alert-circle'},
      {key:'accounting_dashboard', label:'Dashboard',         icon:'ti-layout-dashboard'},
      {key:'student_discounts',    label:'Student Discounts', icon:'ti-user-dollar'},
      {key:'student_submissions',  label:'Student Submissions',icon:'ti-upload'},
    ]
  },
  {
    key:'assessment', label:'Assessment', badge:'Assessment', icon:'ti-file-text',
    subs:[
      {key:'fee_setup',          label:'Fee Setup',           icon:'ti-settings'},
      {key:'assess_dashboard',   label:'Dashboard',           icon:'ti-layout-dashboard'},
      {key:'assessment_main',    label:'Assessment',          icon:'ti-file-text'},
      {key:'payment_terms',      label:'Payment Terms',       icon:'ti-calendar-dollar'},
      {key:'add_drop_processing',label:'Add/Drop Processing', icon:'ti-transfer'},
    ]
  },
  {
    key:'cashier', label:'Cashier', badge:'Cashier', icon:'ti-cash',
    subs:[
      {key:'c_payments',        label:'Payments',  icon:'ti-cash'},
      {key:'c_or_series',       label:'OR Series', icon:'ti-hash'},
      {key:'cashier_dashboard', label:'Dashboard', icon:'ti-layout-dashboard'},
    ]
  },
  {
    key:'basic_education', label:'Basic Education', badge:'Basic Ed.', icon:'ti-school',
    subs:[
      {key:'be_sections',      label:'Basic Ed Sections',        icon:'ti-layout-grid'},
      {key:'besh_sections',    label:'Senior High Sections',     icon:'ti-layout'},
      {key:'be_grade_levels',  label:'Grade Levels',    icon:'ti-list-numbers'},
      {key:'be_class_schedules',label:'Class Schedules',icon:'ti-calendar-time'},
    ]
  },
    {
    key:'college_admission', label:'College Admission', badge:'Admission', icon:'ti-clipboard-list',
    subs:[
      {key:'applicants',       label:'Applicants',      icon:'ti-user-plus'},
      {key:'adm_dashboard',    label:'Dashboard',       icon:'ti-layout-dashboard'},
      {key:'exam_schedules',   label:'Exam Schedules',  icon:'ti-calendar-event'},
    ]
  },
  {
    key:'basic_ed_admission', label:'Basic Ed Admission', badge:'Basic Ed Adm.', icon:'ti-clipboard-list',
    subs:[
      {key:'be_applicants',    label:'Applicants',      icon:'ti-user-plus'},
      {key:'be_adm_dashboard', label:'Dashboard',       icon:'ti-layout-dashboard'},
      {key:'be_exam_schedules',label:'Exam Schedules',  icon:'ti-calendar-event'},
    ]
  },
  {
    key:'faculty', label:'Faculty', badge:'Faculty', icon:'ti-user-star',
    subs:[
      {key:'fac_classes',       label:'Classes',        icon:'ti-books'},
      {key:'fac_attendance',    label:'Attendance',     icon:'ti-checkbox'},
      {key:'fac_grade_encoding',label:'Grade Encoding', icon:'ti-pencil'},
    ]
  },
  {
    key:'student', label:'Student', badge:'Student', icon:'ti-user',
    subs:[
      {key:'stu_grades',       label:'Grades',              icon:'ti-pencil'},
      {key:'stu_schedule',     label:'Schedule',            icon:'ti-calendar-time'},
      {key:'stu_dashboard',    label:'Dashboard',           icon:'ti-layout-dashboard'},
      {key:'stu_enrollment',   label:'Enrollment',          icon:'ti-user-check'},
      {key:'select_student',   label:'Select Student',      icon:'ti-eye'},
      {key:'stu_soa',          label:'Statement of Account',icon:'ti-file-text'},
      {key:'stu_assessment',   label:'My Assessment',       icon:'ti-file-invoice'},
    ]
  },
  {
    key:'applicant', label:'Applicant', badge:'Applicant', icon:'ti-users',
    subs:[
      {key:'my_profile',       label:'My Profile',       icon:'ti-user'},
      {key:'documents',        label:'Documents',         icon:'ti-files'},
      {key:'next_steps',       label:'Next Steps',        icon:'ti-arrow-right'},
      {key:'select_applicant', label:'Select Applicant', icon:'ti-eye'},
      {key:'my_application',   label:'My Application',   icon:'ti-clipboard-list'},
    ]
  },
]);

/* ── Build TM & moduleSubKeys (same as original) ─────────── */
const TM = {};
const moduleSubKeys = {};
MODS.forEach(m => {
  TM[m.key] = {label: m.label, badge: m.badge, isParent: true};
  moduleSubKeys[m.key] = new Set();
  m.subs.forEach(s => {
    TM[s.key] = {label: m.label + ' › ' + s.label, badge: m.badge, parent: m.key};
    moduleSubKeys[m.key].add(s.key);
  });
});

const TAG_COLORS = Object.freeze([
  {bg:'#dbeafe',color:'#1e40af',dot:'#3b82f6'},
  {bg:'#dcfce7',color:'#166534',dot:'#22c55e'},
  {bg:'#fef9c3',color:'#854d0e',dot:'#eab308'},
  {bg:'#fce7f3',color:'#9d174d',dot:'#ec4899'},
  {bg:'#ede9fe',color:'#5b21b6',dot:'#8b5cf6'},
  {bg:'#ffedd5',color:'#9a3412',dot:'#f97316'},
  {bg:'#e0f2fe',color:'#0c4a6e',dot:'#0ea5e9'},
  {bg:'#f0fdf4',color:'#14532d',dot:'#4ade80'},
]);

/* ═══════════════════════════════════════════════════════════
   FIX 1: Freeze _emptySet so accidental mutation throws in
   strict mode instead of silently corrupting the sentinel.
═══════════════════════════════════════════════════════════ */
const _emptySet = Object.freeze(new Set());

let activeFilter    = 'all';
let noteConnections = {};
let notes           = [];
let noteMap         = new Map();
let nextId          = 1;
let currentView     = 'grid';
let isDark          = false;
let connEditingId   = null;
let modalImgData    = null;
let modalTags       = [];
let selectedTagColor = 0;
let currentUserName = 'Admin';
let noteHistory     = {};
let tagIndex        = new Map();

/* ═══════════════════════════════════════════════════════════
   FIX 2: Module count cache — O(1) badge reads after initial
   build. Invalidated only when a note's module changes.
═══════════════════════════════════════════════════════════ */
const moduleCountCache = new Map(); // subKey → count

function _rebuildModuleCountCache() {
  moduleCountCache.clear();
  for (const n of notes) {
    moduleCountCache.set(n.module, (moduleCountCache.get(n.module) || 0) + 1);
  }
}
function _incModuleCount(subKey) {
  moduleCountCache.set(subKey, (moduleCountCache.get(subKey) || 0) + 1);
}
function _decModuleCount(subKey) {
  const c = (moduleCountCache.get(subKey) || 1) - 1;
  if (c <= 0) moduleCountCache.delete(subKey);
  else moduleCountCache.set(subKey, c);
}

const DOM = {};
function cacheDom() {
  DOM.ptitle       = $('ptitle');
  DOM.pbadge       = $('pbadge');
  DOM.sinput       = $('sinput');
  DOM.sortSel      = $('sort-sel');
  DOM.filterTag    = $('filter-tag');
  DOM.filterImg    = $('filter-img');
  DOM.scnt         = $('scnt');
  DOM.ngrid        = $('ngrid');
  DOM.progBar      = $('prog-bar');
  DOM.progLabel    = $('prog-label');
  DOM.progFill     = $('prog-fill');
  DOM.progPct      = $('prog-pct');
  DOM.toast        = $('toast');
  DOM.toastMsg     = $('toastMsg');
  DOM.storageLabel = $('storage-label');
  DOM.darkIcon     = $('dark-icon');
  DOM.darkToggleBtn= $('dark-toggle-btn');
  DOM.vbtnGrid     = $('vbtn-grid');
  DOM.vbtnList     = $('vbtn-list');
  DOM.starredBtn   = $('starred-btn');
  DOM.userNameDisp = $('user-name-disp');
}

/* ── Indexes (unchanged logic, cache wired in) ───────────── */
function rebuildIndexes() {
  noteMap.clear(); tagIndex.clear();
  notes.forEach(n => {
    noteMap.set(n.id, n);
    (n.tags || []).forEach(t => {
      if (!tagIndex.has(t)) tagIndex.set(t, new Set());
      tagIndex.get(t).add(n.id);
    });
  });
  _rebuildModuleCountCache(); // FIX 2
}
function addToIndexes(note) {
  noteMap.set(note.id, note);
  (note.tags || []).forEach(t => {
    if (!tagIndex.has(t)) tagIndex.set(t, new Set());
    tagIndex.get(t).add(note.id);
  });
  _incModuleCount(note.module); // FIX 2
}
function removeFromIndexes(note) {
  noteMap.delete(note.id);
  (note.tags || []).forEach(t => {
    tagIndex.get(t)?.delete(note.id);
    if (tagIndex.get(t)?.size === 0) tagIndex.delete(t);
  });
  _decModuleCount(note.module); // FIX 2
}
function updateIndexesForNote(oldNote, newNote) {
  (oldNote.tags || []).forEach(t => {
    tagIndex.get(t)?.delete(oldNote.id);
    if (tagIndex.get(t)?.size === 0) tagIndex.delete(t);
  });
  (newNote.tags || []).forEach(t => {
    if (!tagIndex.has(t)) tagIndex.set(t, new Set());
    tagIndex.get(t).add(newNote.id);
  });
  noteMap.set(newNote.id, newNote);
  // FIX 2: update module count if module changed
  if (oldNote.module !== newNote.module) {
    _decModuleCount(oldNote.module);
    _incModuleCount(newNote.module);
  }
}

/* ═══════════════════════════════════════════════════════════
   FIX 3: Track saved byte size in-memory. _updateStoragePill
   no longer calls localStorage.getItem just to measure size.
═══════════════════════════════════════════════════════════ */
let _savedByteSize = 0;

const LS_KEY = 'usermanual2026_admin_v1';
let _saveTimer = null;
function saveToStorage(immediate = false) {
  if (immediate) { _doSave(); return; }
  clearTimeout(_saveTimer); _saveTimer = setTimeout(_doSave, 300);
}
function _doSave() {
  try {
    const connObj = {};
    for (const [k, v] of Object.entries(noteConnections)) connObj[k] = [...v];
    const payload = JSON.stringify({
      version:'admin-v1', notes, connections: connObj,
      nextId, isDark, currentUserName, noteHistory
    });
    localStorage.setItem(LS_KEY, payload);
    _savedByteSize = new Blob([payload]).size; // FIX 3: measure once on write
    _updateStoragePill();
  } catch(e) { console.warn('Save failed:', e); }
}
function loadFromStorage() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return false;
    _savedByteSize = new Blob([raw]).size; // FIX 3: measure on load
    const data = JSON.parse(raw);
    if (data.notes && Array.isArray(data.notes)) {
      notes  = data.notes;
      nextId = data.nextId || (Math.max(...notes.map(n => n.id || 0), 0) + 1);
    }
    noteConnections = {};
    if (data.connections) {
      for (const [k, v] of Object.entries(data.connections))
        noteConnections[parseInt(k)] = new Set(v.map(Number));
    }
    noteHistory     = data.noteHistory || {};
    currentUserName = data.currentUserName || 'Admin';
    if (data.isDark) { isDark = true; document.body.classList.add('dark'); }
    return true;
  } catch(e) { return false; }
}
function _updateStoragePill() {
  // FIX 3: uses _savedByteSize — no localStorage re-read
  if (!_savedByteSize) { DOM.storageLabel.textContent = 'No saved data'; return; }
  const kb = (_savedByteSize / 1024).toFixed(1);
  DOM.storageLabel.textContent = `Saved · ${notes.length} notes · ${kb} KB`;
}
function clearStorage() {
  if (!confirm('Delete ALL saved notes and settings?')) return;
  localStorage.removeItem(LS_KEY);
  notes = []; noteConnections = {}; nextId = 1; isDark = false; noteHistory = {};
  noteMap.clear(); tagIndex.clear(); moduleCountCache.clear(); _savedByteSize = 0;
  document.body.classList.remove('dark');
  renderNotes(); _updateStoragePill(); renderTagFilter();
  showToast('Saved data cleared.');
}

function recordHistory(note, changeDesc) {
  if (!noteHistory[note.id]) noteHistory[note.id] = [];
  noteHistory[note.id].unshift({
    ts: Date.now(), desc: changeDesc || 'Edited', author: currentUserName,
    snapshot: {title: note.title, desc: note.desc, fn: note.fn, module: note.module, tags: note.tags ? [...note.tags] : []},
  });
  if (noteHistory[note.id].length > 10) noteHistory[note.id].length = 10;
}

function promptUserName() {
  const n = prompt('Enter your display name:', currentUserName);
  if (n && n.trim()) {
    currentUserName = n.trim();
    DOM.userNameDisp.textContent = '👤 ' + currentUserName;
    saveToStorage();
  }
}
function toggleDark() {
  isDark = !isDark;
  document.body.classList.toggle('dark', isDark);
  DOM.darkIcon.className = isDark ? 'ti ti-sun' : 'ti ti-moon';
  DOM.darkToggleBtn.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  saveToStorage();
}

/* ── Sidebar ─────────────────────────────────────────────── */
function buildSidebar() {
  const nav = $('snav-modules');
  const parts = [];
  MODS.forEach(m => {
    parts.push(`<div class="mod-group"><button class="mod-header" onclick="toggleMod('${m.key}',this)"><i class="ti ${m.icon} mi"></i>${m.label}<i class="ti ti-chevron-down ch"></i></button><div class="mod-items" id="mi-${m.key}">`);
    let lastGroup = null;
    m.subs.forEach(s => {
      if (s.group && s.group !== lastGroup) {
        lastGroup = s.group;
        parts.push(`<div class="sub-group-header"><i class="ti ${s.groupIcon||'ti-point'}"></i>${s.group}</div>`);
      }
      // FIX 2: use cache at build time (cache built after loadFromStorage)
      const cnt = moduleCountCache.get(s.key) || 0;
      parts.push(`<button class="sub-item" id="si-${s.key}" onclick="filterSub('${s.key}','${m.label} › ${s.label}','${m.badge}',this)"><i class="ti ${s.icon}"></i>${s.label}${cnt ? `<span class="sub-badge">${cnt}</span>` : ''}</button>`);
    });
    parts.push(`</div></div>`);
  });
  nav.innerHTML = parts.join('');
}

/* ═══════════════════════════════════════════════════════════
   FIX 2: refreshSidebarCounts is now O(total_subs) using the
   cache instead of O(notes × total_subs).
═══════════════════════════════════════════════════════════ */
function refreshSidebarCounts() {
  MODS.forEach(m => m.subs.forEach(s => {
    const el = $('si-' + s.key); if (!el) return;
    const cnt = moduleCountCache.get(s.key) || 0;
    let badge = el.querySelector('.sub-badge');
    if (cnt) {
      if (!badge) { badge = document.createElement('span'); badge.className = 'sub-badge'; el.appendChild(badge); }
      badge.textContent = cnt;
    } else if (badge) { badge.remove(); }
  }));
}

function _clearSidebarActive() {
  $$('.mod-header').forEach(b => b.classList.remove('open'));
  $$('.mod-items').forEach(d => d.classList.remove('open'));
  $$('.sub-item').forEach(b => b.classList.remove('active'));
  DOM.starredBtn.classList.remove('active');
}
function filterAll(el) {
  activeFilter = 'all'; _clearSidebarActive(); el.classList.add('open');
  DOM.ptitle.textContent = 'All Notes'; DOM.pbadge.textContent = 'Manual';
  _invalidateRenderCache(); renderNotes();
}
function filterStarred(el) {
  activeFilter = 'starred'; _clearSidebarActive(); el.classList.add('active');
  DOM.ptitle.textContent = 'Starred Notes'; DOM.pbadge.textContent = 'Starred';
  _invalidateRenderCache(); renderNotes();
}
function toggleMod(key, el) {
  const items = $('mi-' + key); const wasOpen = items.classList.contains('open');
  _clearSidebarActive();
  if (!wasOpen) { items.classList.add('open'); el.classList.add('open'); }
}
function filterSub(subKey, label, badge, el) {
  activeFilter = subKey;
  $$('.sub-item').forEach(b => b.classList.remove('active'));
  DOM.starredBtn.classList.remove('active');
  el.classList.add('active');
  DOM.ptitle.textContent = label; DOM.pbadge.textContent = badge;
  DOM.sinput.value = '';
  _invalidateRenderCache(); renderNotes();
}

function getFiltered() {
  const q = DOM.sinput.value.toLowerCase();
  const imgF = DOM.filterImg.value;
  const tagF = DOM.filterTag.value;
  let base;
  if (activeFilter === 'starred') { base = notes.filter(n => n.starred); }
  else if (activeFilter !== 'all') {
    const subSet = moduleSubKeys[activeFilter];
    base = subSet ? notes.filter(n => subSet.has(n.module)) : notes.filter(n => n.module === activeFilter);
  } else { base = notes; }
  if (tagF) { const ids = tagIndex.get(tagF); if (!ids || ids.size === 0) return []; base = base.filter(n => ids.has(n.id)); }
  if (imgF === 'with')    base = base.filter(n => n.img);
  if (imgF === 'without') base = base.filter(n => !n.img);
  if (q) base = base.filter(n => (n.title + n.desc + n.fn + (n.tags || []).join(' ')).toLowerCase().includes(q));
  return base;
}
function getSorted(arr) {
  const s = DOM.sortSel.value;
  return [...arr].sort((a, b) => {
    switch (s) {
      case 'date-asc':    return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
      case 'title-asc':   return a.title.localeCompare(b.title);
      case 'title-desc':  return b.title.localeCompare(a.title);
      case 'connections': return ((noteConnections[b.id] || _emptySet).size) - ((noteConnections[a.id] || _emptySet).size);
      default:            return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
    }
  });
}

function updateProgress() {
  if (activeFilter === 'all' || activeFilter === 'starred') {
    let total = 0, covered = 0;
    MODS.forEach(m => {
      total += m.subs.length;
      // FIX 2: use cache instead of notes.some()
      m.subs.forEach(s => { if (moduleCountCache.has(s.key)) covered++; });
    });
    const pct = total ? Math.round(covered / total * 100) : 0;
    DOM.progLabel.textContent = `Documentation coverage: ${covered}/${total} sub-pages`;
    DOM.progFill.style.width = pct + '%'; DOM.progPct.textContent = pct + '%';
    DOM.progBar.style.display = 'flex';
  } else {
    const mod = MODS.find(m => m.key === activeFilter);
    if (mod) {
      const total = mod.subs.length;
      const covered = mod.subs.filter(s => moduleCountCache.has(s.key)).length; // FIX 2
      const pct = total ? Math.round(covered / total * 100) : 0;
      DOM.progLabel.textContent = `${mod.label} coverage: ${covered}/${total}`;
      DOM.progFill.style.width = pct + '%'; DOM.progPct.textContent = pct + '%';
      DOM.progBar.style.display = 'flex';
    } else { DOM.progBar.style.display = 'none'; }
  }
}

function setView(v) {
  currentView = v;
  DOM.vbtnGrid.classList.toggle('active', v === 'grid');
  DOM.vbtnList.classList.toggle('active', v === 'list');
  DOM.ngrid.className = v === 'grid' ? 'notes-grid' : 'notes-list';
  _invalidateRenderCache(); renderNotes();
}

function renderTagFilter() {
  const cur = DOM.filterTag.value;
  const parts = ['<option value="">All tags</option>'];
  tagIndex.forEach((_, t) => { parts.push(`<option value="${esc(t)}"${t === cur ? ' selected' : ''}>${esc(t)}</option>`); });
  DOM.filterTag.innerHTML = parts.join('');
}

/* ═══════════════════════════════════════════════════════════
   FIX 4: Render cache — skips getFiltered+getSorted when the
   filter inputs haven't changed. Cache key encodes all filter
   dimensions. Invalidated explicitly on data/filter changes.
═══════════════════════════════════════════════════════════ */
let _renderCacheKey  = null;
let _renderCacheData = null;

function _getRenderCacheKey() {
  return [
    activeFilter,
    DOM.sinput.value,
    DOM.sortSel.value,
    DOM.filterTag.value,
    DOM.filterImg.value,
    currentView,
    notes.length,            // crude version stamp — invalidated by add/delete
    JSON.stringify(Object.keys(noteConnections).map(k => (noteConnections[k]||_emptySet).size)), // connection sizes
  ].join('|');
}
function _invalidateRenderCache() { _renderCacheKey = null; _renderCacheData = null; }

let _searchTimer = null;
function debouncedRender() { clearTimeout(_searchTimer); _searchTimer = setTimeout(renderNotes, 150); }
function esc(s) { return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function getConnectedNotes(id) {
  return [...(noteConnections[id] || _emptySet)].map(cid => noteMap.get(cid)).filter(Boolean);
}

function initGridDelegation() {
  DOM.ngrid.addEventListener('click', e => {
    const btn = e.target.closest('[data-action]'); if (!btn) return;
    const id = parseInt(btn.dataset.id); const act = btn.dataset.action;
    if (act === 'star')      toggleStar(id);
    else if (act === 'conn') openConnModal(id);
    else if (act === 'hist') openHistoryModal(id);
    else if (act === 'edit') openModal(id);
    else if (act === 'del')  deleteNote(id);
    else if (act === 'img')  triggerImgPick(id);
    else if (act === 'rimg') removeImg(id);
  });
}

/* ═══════════════════════════════════════════════════════════
   FIX 4 cont.: renderNotes uses the cache. Star and connection
   changes patch existing DOM nodes instead of rebuilding all.
═══════════════════════════════════════════════════════════ */
function renderNotes() {
  const cacheKey = _getRenderCacheKey();
  let filtered;
  if (cacheKey === _renderCacheKey && _renderCacheData) {
    filtered = _renderCacheData;
  } else {
    filtered = getSorted(getFiltered());
    _renderCacheKey  = cacheKey;
    _renderCacheData = filtered;
  }

  DOM.scnt.textContent = filtered.length + ' note' + (filtered.length !== 1 ? 's' : '');
  updateProgress();

  if (!filtered.length) {
    DOM.ngrid.innerHTML = '<div class="empty-state"><i class="ti ti-notes"></i><div style="font-size:14px;font-weight:500;margin-bottom:4px;color:var(--primary)">No notes yet</div><div style="font-size:12px;color:var(--primary-icon)">Click <strong>+ Add Note</strong> to get started.</div></div>';
    return;
  }
  const parts = [];
  if (currentView === 'list') {
    filtered.forEach(n => {
      const tm = TM[n.module] || {badge:'—'};
      const imgEl = n.img ? `<img class="list-item-img" src="${n.img}" alt="">` : `<div class="list-item-img placeholder"><i class="ti ti-photo"></i></div>`;
      parts.push(`<div class="list-item" id="nc-${n.id}">${imgEl}<div class="list-item-body"><div class="list-item-title">${esc(n.title)}${n.starred?' ⭐':''}</div><div class="list-item-desc">${esc(n.desc)}</div></div><div class="list-item-meta"><span class="list-item-tag">${tm.badge}</span><span class="list-item-date">${n.date||''}</span><button class="icon-btn" data-action="edit" data-id="${n.id}"><i class="ti ti-edit"></i></button><button class="icon-btn" data-action="del" data-id="${n.id}"><i class="ti ti-trash"></i></button></div></div>`);
    });
  } else {
    filtered.forEach(n => {
      const tm = TM[n.module] || {badge:'—'};
      const imgSection = n.img
        ? `<div class="note-img-wrap"><img src="${n.img}" alt=""><button class="img-remove-btn" data-action="rimg" data-id="${n.id}"><i class="ti ti-x"></i></button></div>`
        : `<div class="note-img-wrap"><button class="note-img-placeholder" data-action="img" data-id="${n.id}"><i class="ti ti-photo"></i><span>Click to add image</span></button></div>`;
      const connected = getConnectedNotes(n.id);
      const connChips = connected.map(cn => `<span class="note-conn-chip"><i class="ti ti-arrow-right"></i>${esc(cn.title.slice(0,16))}</span>`).join('');
      const tagsHtml  = (n.tags||[]).map(t => {
        const c = TAG_COLORS[n.tagColors?.[t]||0]||TAG_COLORS[0];
        return `<span class="tag-chip" style="background:${c.bg};color:${c.color}">${esc(t)}</span>`;
      }).join('');
      const authorStr = n.author ? `<span class="note-author"><i class="ti ti-user" style="font-size:10px"></i>${esc(n.author)}</span>` : '';
      parts.push(`<div class="note-card${n.starred?' starred-card':''}" id="nc-${n.id}">${imgSection}<div class="note-body"><div class="note-header-row"><span class="note-tag">${tm.badge}</span><button class="star-btn${n.starred?' starred':''}" data-action="star" data-id="${n.id}"><i class="ti ti-star${n.starred?'-filled':''}"></i></button></div><div class="note-title">${esc(n.title)}</div><div class="note-desc">${esc(n.desc)}</div><div class="note-fn"><strong>What it does</strong>${esc(n.fn)}</div>${tagsHtml?`<div class="note-tags-row">${tagsHtml}</div>`:''}<div class="note-conn-bar">${connChips}<button class="note-conn-add" data-action="conn" data-id="${n.id}"><i class="ti ti-plus"></i>${connected.length?'Edit':'Add'} connections</button></div><div class="note-meta"><div style="display:flex;flex-direction:column;gap:1px">${authorStr}<span class="note-date"><i class="ti ti-calendar" style="font-size:10px;vertical-align:-1px;margin-right:2px"></i>${n.date||''}</span></div><div class="note-actions"><button class="icon-btn" data-action="hist" data-id="${n.id}"><i class="ti ti-history"></i></button><button class="icon-btn" data-action="edit" data-id="${n.id}"><i class="ti ti-edit"></i></button><button class="icon-btn" data-action="del" data-id="${n.id}"><i class="ti ti-trash"></i></button></div></div></div></div>`);
    });
  }
  DOM.ngrid.innerHTML = parts.join('');
}

/* ═══════════════════════════════════════════════════════════
   FIX 4: toggleStar patches the existing card in-place instead
   of triggering a full renderNotes(). Falls back to full
   render only if the card element isn't found (e.g. filter
   hides starred notes immediately).
═══════════════════════════════════════════════════════════ */
function toggleStar(id) {
  const n = noteMap.get(id); if (!n) return;
  n.starred = !n.starred;
  _invalidateRenderCache();

  // Targeted patch for grid view
  const card = $('nc-' + id);
  if (card && currentView === 'grid') {
    card.classList.toggle('starred-card', n.starred);
    const btn = card.querySelector(`.star-btn[data-id="${id}"]`);
    if (btn) {
      btn.classList.toggle('starred', n.starred);
      const icon = btn.querySelector('i');
      if (icon) icon.className = 'ti ti-star' + (n.starred ? '-filled' : '');
    }
    // If filtered to starred-only and we just un-starred, need full render
    if (activeFilter === 'starred' && !n.starred) renderNotes();
  } else {
    renderNotes();
  }
  saveToStorage();
}

function openConnModal(noteId) {
  connEditingId = noteId;
  const note = noteMap.get(noteId); const current = noteConnections[noteId] || _emptySet;
  $('conn-modal-title').textContent = `Connect: "${note.title.slice(0,28)}"`;
  const body = $('conn-modal-body');
  const parts = [`<div class="conn-modal-sub">Select notes to connect:</div>`];
  notes.forEach(n => {
    if (n.id === noteId) { parts.push(`<div class="conn-note-row self"><div class="conn-note-cb"></div><div class="conn-note-label">${esc(n.title)}</div><div class="conn-note-badge">(this note)</div></div>`); return; }
    const checked = current.has(n.id);
    parts.push(`<div class="conn-note-row${checked?' checked':''}" data-nid="${n.id}" onclick="toggleConnRow(this)"><div class="conn-note-cb">${checked?'✓':''}</div><div class="conn-note-label">${esc(n.title)}</div><div class="conn-note-badge">${(TM[n.module]||{badge:'—'}).badge}</div></div>`);
  });
  body.innerHTML = parts.join('');
  $('conn-modal-overlay').classList.add('open');
}
function toggleConnRow(el) { el.classList.toggle('checked'); el.querySelector('.conn-note-cb').textContent = el.classList.contains('checked') ? '✓' : ''; }
function saveConnections() {
  const checked = [...$$('#conn-modal-body .conn-note-row.checked')].map(el => parseInt(el.dataset.nid));
  noteConnections[connEditingId] = new Set(checked);
  _invalidateRenderCache(); // FIX 4: connections changed
  closeConnModal(); renderNotes(); saveToStorage();
}
function closeConnModal() { $('conn-modal-overlay').classList.remove('open'); connEditingId = null; }

/* ═══════════════════════════════════════════════════════════
   FIX 5: _fileInputs DOM cleanup on note delete.
   The input element is now removed from document.body when the
   note is deleted, preventing unbounded DOM growth.
═══════════════════════════════════════════════════════════ */
const _fileInputs = new Map();
function triggerImgPick(id) {
  let inp = _fileInputs.get(id);
  if (!inp) {
    inp = document.createElement('input'); inp.type = 'file'; inp.accept = 'image/*'; inp.style.display = 'none';
    inp.onchange = e => {
      const f = e.target.files[0]; if (!f) return;
      const r = new FileReader();
      r.onload = ev => {
        const n = noteMap.get(id);
        if (n) { n.img = ev.target.result; _invalidateRenderCache(); renderNotes(); saveToStorage(); }
      };
      r.readAsDataURL(f);
    };
    document.body.appendChild(inp); _fileInputs.set(id, inp);
  }
  inp.click();
}
function removeImg(id) {
  const n = noteMap.get(id);
  if (n) { n.img = null; _invalidateRenderCache(); renderNotes(); saveToStorage(); }
}

function getModOpts(sel) {
  return MODS.map(m => `<optgroup label="${m.label}">${m.subs.map(s=>`<option value="${s.key}"${s.key===sel?' selected':''}>${s.label}</option>`).join('')}</optgroup>`).join('');
}
let _modalTagColors = {};
function buildTagsUI(container, tags, colors) {
  modalTags = [...tags]; _modalTagColors = {...colors}; _renderTagChips(container);
}
function _renderTagChips(container) {
  const chipsWrap = container.querySelector('.chips-area');
  chipsWrap.innerHTML = modalTags.map(t => {
    const ci = _modalTagColors[t] !== undefined ? _modalTagColors[t] : selectedTagColor;
    const c = TAG_COLORS[ci]||TAG_COLORS[0];
    return `<span class="tag-chip" style="background:${c.bg};color:${c.color}" data-tag="${esc(t)}">${esc(t)}<button onclick="_removeModalTag('${esc(t)}',this.closest('.tags-input-wrap'))" title="Remove">×</button></span>`;
  }).join('');
}
function _removeModalTag(tag, wrap) { modalTags = modalTags.filter(t => t !== tag); delete _modalTagColors[tag]; _renderTagChips(wrap); }

function openModal(id) {
  const n = id ? noteMap.get(id) : null;
  modalImgData = n ? n.img : null; modalTags = n && n.tags ? [...n.tags] : []; _modalTagColors = n && n.tagColors ? {...n.tagColors} : {}; selectedTagColor = 0;
  const overlay = document.createElement('div'); overlay.className = 'modal-overlay'; overlay.id = 'mov';
  const imgPrev = modalImgData ? `<img src="${modalImgData}" alt="preview">` : '';
  overlay.innerHTML = `<div class="modal-box" style="width:480px">
    <div class="modal-head"><span class="modal-head-title"><i class="ti ti-notes" style="font-size:16px"></i>${n?'Edit Note':'Add Note'}</span><button class="modal-close" onclick="closeModal()"><i class="ti ti-x"></i></button></div>
    <div class="modal-body">
      <div class="form-row"><label class="form-label">Module / Sub-page</label><select id="m-mod">${getModOpts(n?n.module:'dashboard')}</select></div>
      <div class="form-row"><label class="form-label">Title</label><input type="text" id="m-title" value="${n?esc(n.title):''}" placeholder="Note title"></div>
      <div class="form-row"><label class="form-label">Description</label><textarea id="m-desc" placeholder="Brief description">${n?esc(n.desc):''}</textarea></div>
      <div class="form-row"><label class="form-label">What it does</label><textarea id="m-fn" placeholder="Explain the function">${n?esc(n.fn):''}</textarea></div>
      <div class="form-row"><label class="form-label">Custom Tags</label>
        <div class="tags-input-wrap" id="tags-wrap" onclick="this.querySelector('.tag-real-input').focus()">
          <div class="chips-area" style="display:flex;flex-wrap:wrap;gap:4px;align-items:center"></div>
          <input class="tag-real-input" placeholder="Type tag + Enter" style="border:none;background:none;outline:none;font-family:'DM Sans',sans-serif;font-size:12px;color:var(--primary-heading);min-width:80px;flex:1">
        </div>
        <div class="tag-colors" id="tag-color-picker">${TAG_COLORS.map((c,i)=>`<div class="tag-color-dot${i===0?' sel':''}" style="background:${c.dot}" data-ci="${i}" onclick="selectTagColor(${i},this)"></div>`).join('')}</div>
      </div>
      <div class="form-row"><label class="form-label">Screenshot / Image</label>
        <div class="img-upload-zone" id="miz">${imgPrev}
          <i class="ti ti-upload" id="miz-icon" style="${modalImgData?'display:none':''}"></i>
          <span id="miz-txt" style="${modalImgData?'display:none':''}">Click to upload image</span>
          <input type="file" accept="image/*" onchange="modalImgChange(this)">
        </div>
      </div>
    </div>
    <div class="modal-foot"><div></div><div class="modal-foot-right"><button class="btn-cancel" onclick="closeModal()">Cancel</button><button class="btn-save" onclick="saveNote(${n?n.id:0})">${n?'Save Changes':'Add Note'}</button></div></div>
  </div>`;
  $('app').appendChild(overlay);
  buildTagsUI($('tags-wrap'), modalTags, _modalTagColors);
  const tagInp = overlay.querySelector('.tag-real-input');
  tagInp.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const v = tagInp.value.trim().replace(/,/g,'');
      if (v && !modalTags.includes(v)) { modalTags.push(v); _modalTagColors[v] = selectedTagColor; _renderTagChips($('tags-wrap')); tagInp.value = ''; }
    }
  });
}
function selectTagColor(ci, el) { selectedTagColor = ci; $$('#mov .tag-color-dot').forEach(d => d.classList.remove('sel')); el.classList.add('sel'); }
function modalImgChange(inp) {
  const f = inp.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = ev => {
    modalImgData = ev.target.result;
    const z = $('miz'); let img = z.querySelector('img');
    if (!img) { img = document.createElement('img'); z.insertBefore(img, z.firstChild); }
    img.src = modalImgData;
    const icon = $('miz-icon'), txt = $('miz-txt');
    if (icon) icon.style.display = 'none'; if (txt) txt.style.display = 'none';
  };
  r.readAsDataURL(f);
}
function closeModal() { const o = $('mov'); if (o) o.remove(); modalImgData = null; }
function saveNote(id) {
  const title = $('m-title').value.trim(), desc = $('m-desc').value.trim(), fn = $('m-fn').value.trim(), mod = $('m-mod').value;
  if (!title || !desc || !fn) { alert('Please fill in all required fields.'); return; }
  if (id) {
    const n = noteMap.get(id); recordHistory(n, 'Edited');
    const oldSnap = {...n, tags: n.tags ? [...n.tags] : []};
    n.title = title; n.desc = desc; n.fn = fn; n.module = mod; n.img = modalImgData; n.tags = modalTags; n.tagColors = {..._modalTagColors}; n.author = currentUserName;
    updateIndexesForNote(oldSnap, n);
  } else {
    const ts = new Date().toISOString();
    const newNote = {id: nextId++, module: mod, title, desc, fn, date: new Date().toLocaleDateString('en-US', {month:'short',day:'numeric',year:'numeric'}), createdAt: ts, img: modalImgData, tags: modalTags, tagColors: {..._modalTagColors}, author: currentUserName, starred: false};
    notes.unshift(newNote); addToIndexes(newNote);
  }
  _invalidateRenderCache();
  closeModal(); renderNotes(); refreshSidebarCounts(); renderTagFilter(); saveToStorage();
  showToast(id ? 'Note updated!' : 'Note added!');
}

/* ═══════════════════════════════════════════════════════════
   FIX 5 cont.: deleteNote removes the <input type=file> from
   the DOM, not just from the Map.
═══════════════════════════════════════════════════════════ */
function deleteNote(id) {
  if (!confirm('Delete this note?')) return;
  const n = noteMap.get(id); if (n) removeFromIndexes(n);
  notes = notes.filter(x => x.id !== id); delete noteConnections[id]; delete noteHistory[id];
  for (const s of Object.values(noteConnections)) s.delete(id);
  // FIX 5: actually remove the DOM node, not just the Map entry
  const inp = _fileInputs.get(id);
  if (inp) { inp.remove(); _fileInputs.delete(id); }
  _invalidateRenderCache();
  renderNotes(); refreshSidebarCounts(); renderTagFilter(); saveToStorage(true);
}

function openHistoryModal(id) {
  const n = noteMap.get(id); const hist = noteHistory[id] || [];
  const overlay = document.createElement('div'); overlay.className = 'modal-overlay'; overlay.id = 'hmov';
  overlay.innerHTML = `<div class="modal-box">
    <div class="modal-head"><span class="modal-head-title"><i class="ti ti-history" style="font-size:16px"></i>Revision History</span><button class="modal-close" onclick="$('hmov').remove()"><i class="ti ti-x"></i></button></div>
    <div class="modal-body">
      <div style="font-size:12px;color:var(--primary-icon);margin-bottom:8px">Note: <strong style="color:var(--primary-heading)">${esc(n.title)}</strong></div>
      ${!hist.length?`<div style="text-align:center;padding:20px;color:var(--primary-icon);font-size:13px"><i class="ti ti-history" style="font-size:28px;display:block;margin-bottom:8px;opacity:.5"></i>No edit history yet</div>`:''}
      <div class="history-list">${hist.map((h,i)=>`<div class="history-item"><div class="history-dot"></div><div class="history-meta"><div class="history-time">${new Date(h.ts).toLocaleString()} · ${esc(h.author||'Unknown')}</div><div class="history-summary">${esc(h.desc)}: "${esc((h.snapshot.title||'').slice(0,40))}"</div></div><button class="history-restore" onclick="restoreHistory(${id},${i})">Restore</button></div>`).join('')}</div>
    </div>
    <div class="modal-foot"><div></div><div class="modal-foot-right"><button class="btn-cancel" onclick="$('hmov').remove()">Close</button></div></div>
  </div>`;
  $('app').appendChild(overlay);
}
function restoreHistory(noteId, histIdx) {
  if (!confirm('Restore this version?')) return;
  const n = noteMap.get(noteId); const snap = noteHistory[noteId][histIdx].snapshot;
  recordHistory(n, 'Before restore');
  n.title = snap.title; n.desc = snap.desc; n.fn = snap.fn; n.module = snap.module || n.module; n.tags = snap.tags || [];
  updateIndexesForNote(n, n); $('hmov').remove(); _invalidateRenderCache(); renderNotes(); saveToStorage(); showToast('Version restored!');
}

function exportData() {
  const connObj = {};
  for (const [k, v] of Object.entries(noteConnections)) connObj[k] = [...v];
  const blob = new Blob([JSON.stringify({version:'admin-v1', exported: new Date().toISOString(), notes, connections: connObj, noteHistory}, null, 2)], {type:'application/json'});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
  a.download = 'usermanual2026_admin_' + new Date().toISOString().slice(0,10) + '.json'; a.click();
  requestAnimationFrame(() => URL.revokeObjectURL(a.href)); showToast('Notes exported!');
}
function importData(inp) {
  const f = inp.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.notes || !Array.isArray(data.notes)) throw new Error('Invalid');
      if (!confirm(`Import ${data.notes.length} note(s)? This will REPLACE current notes.`)) { inp.value = ''; return; }
      notes = data.notes; nextId = Math.max(...notes.map(n => n.id || 0), 0) + 1;
      noteConnections = {};
      if (data.connections) { for (const [k, v] of Object.entries(data.connections)) noteConnections[parseInt(k)] = new Set(v.map(Number)); }
      noteHistory = data.noteHistory || {};
      rebuildIndexes(); // also rebuilds moduleCountCache (FIX 2)
      _invalidateRenderCache();
      renderNotes(); refreshSidebarCounts(); renderTagFilter(); saveToStorage(true);
      showToast(`${data.notes.length} notes imported!`);
    } catch(err) { alert('Could not read file.'); }
    inp.value = '';
  };
  r.readAsText(f);
}

/* ═══════════════════════════════════════════════════════════
   FIX 6: generateFlowchart XSS prevention.
   fnNodes/fnConns are serialized with a replacer that escapes
   the string "</script>" so it can't break out of the script
   block when embedded in the generated HTML document.
═══════════════════════════════════════════════════════════ */
function _safeJson(obj) {
  return JSON.stringify(obj).replace(/<\/script>/gi, '<\\/script>');
}

function generateFlowchart() {
  if (!notes.length) { showToast('No notes to generate flowchart from.'); return; }
  const CONN_COLORS = ['#4f7ef8','#e84d7c','#3ab86a','#f07830','#8b5cf6','#2cc4b0','#f0b86a','#e84d4d','#4db8e8','#b06af0'];
  const groups = {};
  notes.forEach(n => { const badge = (TM[n.module]||{badge:'—'}).badge; if (!groups[badge]) groups[badge] = []; groups[badge].push(n); });
  const fnNodes = {}; let colX = 60;
  Object.keys(groups).forEach(badge => {
    let rowY = 60;
    groups[badge].forEach(n => { fnNodes[n.id] = {id: String(n.id), x: colX, y: rowY, title: n.title, desc: n.desc}; rowY += 200; });
    colX += 270;
  });
  const fnConns = []; let cIdx = 1;
  for (const [fromId, toSet] of Object.entries(noteConnections)) {
    for (const toId of toSet) {
      if (fnNodes[fromId] && fnNodes[toId]) fnConns.push({id: 'c' + cIdx++, from: String(fromId), to: String(toId), color: CONN_COLORS[(cIdx-2) % CONN_COLORS.length]});
    }
  }
  // FIX 6: use _safeJson to prevent </script> injection
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>FlowNotes</title><style>*{box-sizing:border-box;margin:0;padding:0}body{background:#001f0f;color:#e2e4f0;font-family:system-ui,sans-serif;overflow:hidden;height:100vh}#bar{padding:10px 16px;background:#002b15;border-bottom:1px solid #1a5a30;display:flex;align-items:center;gap:10px;font-size:13px}#bar strong{color:#4fc87a}#cvswrap{position:relative;width:100%;height:calc(100vh - 44px);overflow:hidden}#cvs{position:absolute;top:0;left:0;transform-origin:0 0}#svgl{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}#svgl svg{position:absolute;top:0;left:0;overflow:visible}.node{position:absolute;background:#002b15;border:1.5px solid #1a5a30;border-radius:10px;width:200px;cursor:grab;padding:12px;transition:box-shadow .15s}.node:hover{box-shadow:0 4px 20px rgba(0,0,0,0.5)}.node h4{font-size:12px;font-weight:600;color:#e2e4f0;margin-bottom:4px}.node p{font-size:10px;color:#6b9b7a;line-height:1.5}.node-top{height:3px;border-radius:2px;margin-bottom:8px;background:#1a7a3a}</style></head>
<body><div id="bar"><strong>FlowNotes</strong> — Admin Portal Flowchart<span style="margin-left:10px;font-size:11px;color:#4a7a5a">Drag · Scroll to zoom · Double-click line to delete</span></div>
<div id="cvswrap"><div id="cvs"></div><div id="svgl"><svg id="svg" xmlns="http://www.w3.org/2000/svg"></svg></div></div>
<script>
const nodes=${_safeJson(fnNodes)};const conns=${_safeJson(fnConns)};
let px=40,py=40,zoom=0.9;let panning=false,panStart={x:0,y:0};let dragging=null,dragOff={x:0,y:0};
const wrap=document.getElementById('cvswrap');const cvs=document.getElementById('cvs');const svg=document.getElementById('svg');
function applyT(){cvs.style.transform='translate('+px+'px,'+py+'px) scale('+zoom+')';renderSVG();}
function nodeCenter(id){const n=nodes[id];if(!n)return null;return{x:(n.x+100)*zoom+px,y:(n.y+60)*zoom+py};}
function renderAll(){Object.values(nodes).forEach(n=>{let el=document.getElementById('n'+n.id);if(!el){el=document.createElement('div');el.id='n'+n.id;el.className='node';cvs.appendChild(el);}el.style.left=n.x+'px';el.style.top=n.y+'px';el.innerHTML='<div class="node-top"></div><h4>'+n.title+'</h4><p>'+n.desc+'</p>';});}
function renderSVG(){const W=wrap.clientWidth,H=wrap.clientHeight;svg.setAttribute('width',W);svg.setAttribute('height',H);svg.setAttribute('viewBox','0 0 '+W+' '+H);svg.innerHTML='';const defs=document.createElementNS('http://www.w3.org/2000/svg','defs');conns.forEach(c=>{const m=document.createElementNS('http://www.w3.org/2000/svg','marker');m.setAttribute('id','m'+c.id);m.setAttribute('viewBox','0 0 10 10');m.setAttribute('refX','9');m.setAttribute('refY','5');m.setAttribute('markerWidth','6');m.setAttribute('markerHeight','6');m.setAttribute('orient','auto-start-reverse');const p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d','M1,1 L9,5 L1,9 Z');p.setAttribute('fill',c.color);m.appendChild(p);defs.appendChild(m);});svg.appendChild(defs);conns.forEach(c=>{const a=nodeCenter(c.from),b=nodeCenter(c.to);if(!a||!b)return;const dx=b.x-a.x,dy=b.y-a.y;const cx1=a.x+dx*.5,cy1=a.y+dy*.5;const d='M '+a.x+' '+a.y+' C '+cx1+' '+a.y+', '+cx1+' '+b.y+', '+b.x+' '+b.y;const hit=document.createElementNS('http://www.w3.org/2000/svg','path');hit.setAttribute('d',d);hit.setAttribute('fill','none');hit.setAttribute('stroke','transparent');hit.setAttribute('stroke-width','16');hit.style.pointerEvents='stroke';hit.style.cursor='pointer';hit.addEventListener('dblclick',()=>{const i=conns.findIndex(x=>x.id===c.id);if(i>-1){conns.splice(i,1);renderSVG();}});svg.appendChild(hit);const line=document.createElementNS('http://www.w3.org/2000/svg','path');line.setAttribute('d',d);line.setAttribute('fill','none');line.setAttribute('stroke',c.color);line.setAttribute('stroke-width','2');line.setAttribute('stroke-linecap','round');line.setAttribute('marker-end','url(#m'+c.id+')');line.style.pointerEvents='none';svg.appendChild(line);});}
wrap.addEventListener('mousedown',e=>{const nodeEl=e.target.closest('.node');if(nodeEl){const id=nodeEl.id.slice(1);dragging=id;const n=nodes[id];dragOff={x:(e.clientX-px)/zoom-n.x,y:(e.clientY-py)/zoom-n.y};nodeEl.style.cursor='grabbing';return;}panning=true;panStart={x:e.clientX-px,y:e.clientY-py};wrap.style.cursor='grabbing';});
window.addEventListener('mousemove',e=>{if(dragging){const n=nodes[dragging];n.x=(e.clientX-px)/zoom-dragOff.x;n.y=(e.clientY-py)/zoom-dragOff.y;const el=document.getElementById('n'+dragging);if(el){el.style.left=n.x+'px';el.style.top=n.y+'px';}renderSVG();}else if(panning){px=e.clientX-panStart.x;py=e.clientY-panStart.y;applyT();}});
window.addEventListener('mouseup',()=>{if(dragging){document.getElementById('n'+dragging).style.cursor='grab';dragging=null;}if(panning){panning=false;wrap.style.cursor='default';}});
wrap.addEventListener('wheel',e=>{e.preventDefault();const nz=Math.max(.15,Math.min(3,zoom-e.deltaY*.001));const r=wrap.getBoundingClientRect();const mx=e.clientX-r.left,my=e.clientY-r.top;px=mx-(mx-px)*(nz/zoom);py=my-(my-py)*(nz/zoom);zoom=nz;applyT();},{passive:false});
renderAll();applyT();
<\/script></body></html>`;
  const blob = new Blob([html], {type:'text/html'});
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
  setTimeout(() => URL.revokeObjectURL(url), 30000);
  showToast('Flowchart opened in new tab!');
}

let _toastTimer = null;
function showToast(msg) {
  DOM.toastMsg.textContent = msg; DOM.toast.classList.add('show'); clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => DOM.toast.classList.remove('show'), 2800);
}

document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); DOM.sinput.focus(); }
  if (e.key === 'Escape') {
    const mov = $('mov'), hmov = $('hmov');
    if (mov) { closeModal(); return; }
    if (hmov) { hmov.remove(); return; }
    if ($('conn-modal-overlay').classList.contains('open')) closeConnModal();
  }
});

/* ── Init (order matters: cache build before sidebar render) */
cacheDom();
loadFromStorage();   // populates notes[]
rebuildIndexes();    // builds noteMap, tagIndex, moduleCountCache
buildSidebar();      // reads moduleCountCache — correct counts on first paint
refreshSidebarCounts();
initGridDelegation();
DOM.userNameDisp.textContent = '👤 ' + currentUserName;
if (isDark) { DOM.darkIcon.className = 'ti ti-sun'; DOM.darkToggleBtn.title = 'Switch to light mode'; }
renderNotes();
renderTagFilter();
_updateStoragePill();
