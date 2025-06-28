(async () => {
  const response = await fetch("./resume.json");
  const resume = await response.json();

  document.getElementById('name').textContent = resume.name;
  document.getElementById('tagline').textContent = resume.tagline;

  const contactDiv = document.getElementById('contactInfo');
  for (const [k, v] of Object.entries(resume.contactInfo)) {
    const el = document.createElement('div');
    if (k === "linkedin") {
      el.innerHTML = `<a href="${v}" target="_blank" rel="noopener">${v}</a>`;
    }else{
    el.textContent = v;
    }
    contactDiv.appendChild(el);
  }



  const expDiv = document.getElementById('experience');
  resume.experience.forEach(exp => {
    const entry = document.createElement('div');
    entry.className = 'experience-entry';

    const header = document.createElement('div');
    header.className = 'company-header';

    const company = document.createElement('div');
    company.className = 'company-name';
    company.innerHTML = exp.company;

    const date = document.createElement('div');
    date.className = 'duration';
    date.textContent = `${exp.duration}  •  ${exp.location}`;

    header.appendChild(company);
    header.appendChild(date);
    header
    entry.appendChild(header);

/*     const location = document.createElement('div');
    location.className = 'location';
    location.textContent = exp.location;
    entry.appendChild(location);
 */
    const bullets = document.createElement('div');
    bullets.className = 'bullets-entry';

    exp.bullets.forEach(b => {
      const line = document.createElement('div');
      line.innerHTML = b;
      bullets.appendChild(line);
    });

    entry.appendChild(bullets);
    expDiv.appendChild(entry);
  });

  const skillsDiv = document.getElementById('skills');
  resume.skills.forEach(skill => {
    const tag = document.createElement('div');
    tag.className = 'skills-entry';
    tag.textContent = skill;
    skillsDiv.appendChild(tag);
  });

  const smDiv = document.getElementById('software_management');
  resume.software_management.forEach(skill => {
    const tag = document.createElement('div');
    tag.className = 'software_management-entry';
    tag.textContent = skill;
    smDiv.appendChild(tag);
  });

  const addlDiv = document.getElementById('additional_experience');
  if (resume.additional_experience) {
    resume.additional_experience.forEach(role => {
      const entry = document.createElement('div');
      entry.className = 'additional-entry';
      entry.innerHTML = `<b>${role.company}</b><br><span>${role.duration} — ${role.location}</span>`;
      addlDiv.appendChild(entry);
    });
  }

  const eduDiv = document.getElementById('education');
  for (const [k, v] of Object.entries(resume.education)) {
    const el = document.createElement('div');
    el.innerHTML = v;
    eduDiv.appendChild(el);
  }
})();
