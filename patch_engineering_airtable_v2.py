#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import shutil
from pathlib import Path

ROOT = Path.cwd()

ENGINEERING = ROOT / "src" / "guides" / "engineering.jsx"
APP = ROOT / "src" / "App.jsx"
LEAD = ROOT / "netlify" / "functions" / "lead.cjs"
ENV_EXAMPLE = ROOT / ".env.example"
PACKAGE_JSON = ROOT / "package.json"

NETWORKING_SECTION = r'''          {/* ── 02 NETWORKING ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">02 — Strategy</p>
              <h2 className="rg-title">Networking Events</h2>

              <p className="rg-p">
                A Huge Mistake migrants make is staying in their own circles after coming to Australia.{" "}
                <strong className="rg-accent">Don’t be that guy!</strong>
              </p>

              <p className="rg-p">
                Go to engineering events, technical sessions and industry conferences in your target city.
                You can meet practising engineers, hiring managers and people working in the exact discipline
                you want to enter. A good referral can make it much easier to get your CV in front of the right person.
              </p>

              <div className="rg-callout">
                <p className="rg-p">
                  Here are 3 places to keep checking for Engineering networking opportunities in Australia.
                </p>
              </div>

              <div className="rg-link-list">
                <a href="https://eesa.org.au/events" target="_blank" rel="noreferrer" className="rg-link-item">
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">01</span>
                    Electric Energy Society of Australia
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>

                <a href="https://portal.engineersaustralia.org.au/home/events" target="_blank" rel="noreferrer" className="rg-link-item">
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">02</span>
                    Engineers Australia
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>

                <a href="https://www.allconferencealert.com/australia/electrical" target="_blank" rel="noreferrer" className="rg-link-item">
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">03</span>
                    All Conference Alert
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>
              </div>

              <p className="rg-p">
                Tip: Don’t only look for events called “job fairs”. Technical seminars, CPD sessions,
                energy-industry events, engineering society meetings and conferences can be even better
                places to meet people already working in the industry.
              </p>
            </FadeUp>
          </section>

'''

COURSES_SECTION = r'''          {/* ── 03 COURSES ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">03 — Strategy</p>
              <h2 className="rg-title">Online Courses &amp; Certifications</h2>

              <p className="rg-p">
                For Engineering roles, don’t collect random certificates just to fill your CV.
                Pick training that strengthens the exact technical area you want to work in and,
                where possible, use Australian engineering or vocational education providers.
              </p>

              <div className="rg-callout">
                <p className="rg-p">
                  Start with these 3 Australian sources: <strong className="rg-accent">EIT</strong>,
                  <strong className="rg-accent"> TAFE NSW</strong> and
                  <strong className="rg-accent"> Engineers Australia</strong>.
                </p>
              </div>

              <div className="rg-course-category">
                <p className="rg-course-category-title">Engineering Institute of Technology (EIT)</p>

                <p className="rg-p">
                  EIT is useful if you want engineering-specific study rather than generic online courses.
                  Their study areas include Electrical, Mechanical, Civil &amp; Structural, Industrial Automation,
                  Instrumentation and related engineering pathways.
                </p>

                <a href="https://www.eit.edu.au/study-areas/electrical-engineering/" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" />
                  Electrical Engineering
                </a>

                <a href="https://www.eit.edu.au/study-areas/mechanical-engineering/" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" />
                  Mechanical Engineering
                </a>

                <a href="https://www.eit.edu.au/study-areas/civil-engineering/" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" />
                  Civil &amp; Structural Engineering
                </a>

                <a href="https://www.eit.edu.au/study-areas/industrial-automation-instrumentation-and-process-control/" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" />
                  Industrial Automation, Instrumentation &amp; Process Control
                </a>

                <a href="https://www.eit.edu.au/courses/" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" />
                  Browse All EIT Engineering Courses
                </a>
              </div>

              <div className="rg-course-category">
                <p className="rg-course-category-title">TAFE NSW</p>

                <p className="rg-p">
                  TAFE NSW is worth checking when you want practical Australian training, particularly
                  in engineering, drafting, electrotechnology, electrical systems and technician-level skills.
                </p>

                <a href="https://www.tafensw.edu.au/course-areas/engineering" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" />
                  Engineering Courses
                </a>

                <a href="https://www.tafensw.edu.au/course-areas/electrotechnology/electrical" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" />
                  Electrical / Electrotechnology Courses
                </a>

                <a href="https://www.tafensw.edu.au/course-areas/electrotechnology/courses/diploma-of-electrical-engineering--UEE50420-01" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" />
                  Diploma of Electrical Engineering
                </a>

                <a href="https://www.tafensw.edu.au/course-areas/engineering?filter=short-courses" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" />
                  Engineering Short Courses &amp; Drafting / AutoCAD Options
                </a>
              </div>

              <div className="rg-course-category">
                <p className="rg-course-category-title">Engineers Australia — CPD &amp; Professional Learning</p>

                <p className="rg-p">
                  Engineers Australia is especially useful for professional development. Their learning
                  ecosystem includes CPD activities, short courses, webinars, seminars and technical events,
                  so it can also help you understand how engineers continue developing professionally in Australia.
                </p>

                <a href="https://www.engineersaustralia.org.au/membership/cpd-requirements" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" />
                  Engineers Australia CPD Resources
                </a>

                <a href="https://portal.engineersaustralia.org.au/home/events" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" />
                  Webinars, Seminars &amp; Technical Events
                </a>
              </div>

              <div className="rg-callout">
                <p className="rg-p">
                  <strong className="rg-accent">How to choose:</strong> Electrical / power engineers can start
                  with EIT Electrical or TAFE electrotechnology. Mechanical engineers can check EIT Mechanical.
                  Civil / structural engineers can check EIT Civil &amp; Structural. Automation / controls engineers
                  can check EIT Industrial Automation. For broader Australian professional development, check
                  Engineers Australia CPD and technical events.
                </p>
              </div>
            </FadeUp>
          </section>

'''

VOLUNTEERING_SECTION = r'''          {/* ── 04 VOLUNTEERING ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">04 — Strategy</p>
              <h2 className="rg-title">Volunteering</h2>

              <p className="rg-p">
                Yes, Volunteering! Australian volunteering can help you build local connections,
                demonstrate community involvement and give you something current to talk about with recruiters.
              </p>

              <p className="rg-p">
                It does not always have to be a formal engineering role. But when you can find
                engineering-related volunteering, technical committees, community projects or professional
                society opportunities, that can be especially useful for your engineering story.
              </p>

              <p className="rg-video-label" style={{ marginTop: 64 }}>Start with SEEK Volunteer</p>
              <VideoEmbed
                src="https://player.vimeo.com/video/1209435820?badge=0&autopause=0&player_id=0&app_id=58479"
                title="Best Website to find Volunteering Roles in Australia if you don't have local job experience"
              />

              <div className="rg-link-list">
                <p className="rg-video-label" style={{ textAlign: "left", marginTop: 20 }}>
                  Engineering &amp; Community Volunteering Options
                </p>

                <a href="https://www.seekvolunteer.com.au/" target="_blank" rel="noreferrer" className="rg-link-item">
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">01</span>
                    SEEK Volunteer
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>

                <a href="https://eaxchange.engineersaustralia.org.au/officebearerandvolunteerhub/volunteer-opportunities" target="_blank" rel="noreferrer" className="rg-link-item">
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">02</span>
                    Engineers Australia — Volunteer Opportunities
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>

                <a href="https://ewb.org.au/volunteer/" target="_blank" rel="noreferrer" className="rg-link-item">
                  <div className="rg-link-item-left">
                    <span className="rg-link-item-num">03</span>
                    Engineers Without Borders Australia
                  </div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>
              </div>

              <p className="rg-p">
                Start broad on SEEK Volunteer, then check Engineers Australia and Engineers Without Borders
                for opportunities that are closer to the engineering profession.
              </p>
            </FadeUp>
          </section>

'''

AIRTABLE_FUNCTION = r'''exports.handler = async function (event) {
  const responseHeaders = {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  };

  const reply = (statusCode, payload) => ({
    statusCode,
    headers: responseHeaders,
    body: JSON.stringify(payload),
  });

  if (event.httpMethod !== "POST") {
    return reply(405, { error: "Method not allowed" });
  }

  try {
    const body = JSON.parse(event.body || "{}");

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const industry = String(body.industry || "general").trim();
    const sourceUrl = String(body.sourceUrl || "").trim();

    if (!name || !email) {
      return reply(400, { error: "Name and email are required" });
    }

    const token = process.env.AIRTABLE_TOKEN;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableId = process.env.AIRTABLE_TABLE_ID;

    if (!token || !baseId || !tableId) {
      console.error("Airtable configuration missing", {
        hasToken: Boolean(token),
        hasBaseId: Boolean(baseId),
        hasTableId: Boolean(tableId),
      });

      return reply(500, {
        error: "Airtable environment variables are missing",
        required: ["AIRTABLE_TOKEN", "AIRTABLE_BASE_ID", "AIRTABLE_TABLE_ID"],
      });
    }

    const endpoint =
      `https://api.airtable.com/v0/${encodeURIComponent(baseId)}/${encodeURIComponent(tableId)}`;

    const fields = {
      Name: name,
      Email: email,
      Industry: industry,
      "Source URL": sourceUrl,
    };

    const airtableResponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [{ fields }],
        typecast: true,
      }),
    });

    const raw = await airtableResponse.text();

    let airtableBody;
    try {
      airtableBody = raw ? JSON.parse(raw) : {};
    } catch {
      airtableBody = { raw };
    }

    if (!airtableResponse.ok) {
      console.error("Airtable create-record failed", {
        status: airtableResponse.status,
        response: airtableBody,
      });

      return reply(airtableResponse.status, {
        error: "Airtable rejected the lead",
        airtable: airtableBody,
        hint:
          airtableResponse.status === 422
            ? "Check that Base ID/Table ID belong together and the Airtable fields are exactly: Name, Email, Industry, Source URL. If Industry is a select field, pre-create the 9 industry choices or ensure the token can typecast them."
            : undefined,
      });
    }

    return reply(200, {
      ok: true,
      id: airtableBody.records?.[0]?.id || null,
    });
  } catch (error) {
    console.error("Lead capture error:", error);

    return reply(500, {
      error: "Failed to save lead",
      details: error instanceof Error ? error.message : String(error),
    });
  }
};
'''

ENV_CONTENT = '''# Airtable lead capture
AIRTABLE_TOKEN=
AIRTABLE_BASE_ID=
AIRTABLE_TABLE_ID=
'''


def backup(path: Path) -> None:
    if not path.exists():
        return
    backup_path = path.with_suffix(path.suffix + ".bak")
    if not backup_path.exists():
        shutil.copy2(path, backup_path)
        print(f"Backup created: {backup_path.relative_to(ROOT)}")


def replace_section(text: str, start_marker: str, end_marker: str, replacement: str) -> str:
    start = text.find(start_marker)
    if start == -1:
        raise RuntimeError(f"Could not find section marker: {start_marker}")
    end = text.find(end_marker, start)
    if end == -1:
        raise RuntimeError(f"Could not find following marker: {end_marker}")
    return text[:start] + replacement + text[end:]


def patch_engineering() -> None:
    if not ENGINEERING.exists():
        raise FileNotFoundError(f"Missing {ENGINEERING}")

    backup(ENGINEERING)
    text = ENGINEERING.read_text(encoding="utf-8")

    text = re.sub(
        r"// IT guide\.\n// This currently duplicates.*?\n// Replace.*?\n",
        "// Engineering resource guide.\n",
        text,
        count=1,
    )

    text = text.replace(
        '<h1><span className="rg-gold">IT</span> Job Seekers 🇦🇺',
        '<h1><span className="rg-gold">Engineering</span> Job Seekers 🇦🇺',
    )
    text = text.replace(
        "Since you are looking for IT Jobs, we gathered as many resources as possible to help your job search!",
        "Since you are looking for Engineering Jobs, we gathered as many resources as possible to help your job search!",
    )
    text = text.replace(
        "“Suggest me project ideas that I can do online, which will help me land a job in the specific location and job titles I mentioned earlier.”",
        "“Suggest me passion project ideas I can do to build my engineering portfolio targeting [job titles] in [city/state], Australia. The projects should show I understand Australian standards, local conditions and industry practices.”",
    )

    text = replace_section(
        text,
        "          {/* ── 02 NETWORKING ── */}",
        "          {/* ── 03 COURSES ── */}",
        NETWORKING_SECTION,
    )
    text = replace_section(
        text,
        "          {/* ── 03 COURSES ── */}",
        "          {/* ── 04 VOLUNTEERING ── */}",
        COURSES_SECTION,
    )
    text = replace_section(
        text,
        "          {/* ── 04 VOLUNTEERING ── */}",
        "          {/* ── CTA ── */}",
        VOLUNTEERING_SECTION,
    )

    ENGINEERING.write_text(text, encoding="utf-8")
    print(f"Patched: {ENGINEERING.relative_to(ROOT)}")


def patch_airtable() -> None:
    LEAD.parent.mkdir(parents=True, exist_ok=True)
    backup(LEAD)
    LEAD.write_text(AIRTABLE_FUNCTION, encoding="utf-8")
    print(f"Patched: {LEAD.relative_to(ROOT)}")

    backup(ENV_EXAMPLE)
    ENV_EXAMPLE.write_text(ENV_CONTENT, encoding="utf-8")
    print(f"Patched: {ENV_EXAMPLE.relative_to(ROOT)}")


def patch_frontend_error_logging() -> None:
    if not APP.exists():
        raise FileNotFoundError(f"Missing {APP}")

    backup(APP)
    text = APP.read_text(encoding="utf-8")

    old = '''      if (!response.ok) throw new Error("Lead submission failed");

      setLeadStatus("success");'''

    new = '''      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        console.error("Lead submission failed", {
          status: response.status,
          response: result,
        });
        throw new Error(
          result?.airtable?.error?.message ||
          result?.airtable?.error?.type ||
          result?.error ||
          "Lead submission failed"
        );
      }

      setLeadStatus("success");'''

    if old in text:
        text = text.replace(old, new, 1)
        APP.write_text(text, encoding="utf-8")
        print(f"Patched: {APP.relative_to(ROOT)}")
    elif 'console.error("Lead submission failed"' in text:
        print("App.jsx already has detailed error logging; skipped.")
    else:
        print("WARNING: Could not locate expected App.jsx fetch error line.")


def remove_mongodb_dependency() -> None:
    if not PACKAGE_JSON.exists():
        return

    backup(PACKAGE_JSON)
    data = json.loads(PACKAGE_JSON.read_text(encoding="utf-8"))

    changed = False
    for key in ("dependencies", "devDependencies"):
        deps = data.get(key)
        if isinstance(deps, dict) and "mongodb" in deps:
            del deps["mongodb"]
            changed = True

    if changed:
        PACKAGE_JSON.write_text(
            json.dumps(data, indent=2, ensure_ascii=False) + "\n",
            encoding="utf-8",
        )
        print("Removed mongodb from package.json")


def validate() -> None:
    eng = ENGINEERING.read_text(encoding="utf-8")
    lead = LEAD.read_text(encoding="utf-8")

    should_exist = [
        "Engineering Institute of Technology",
        "TAFE NSW",
        "Engineers Australia — CPD",
        "https://eesa.org.au/events",
        "https://portal.engineersaustralia.org.au/home/events",
        "https://www.allconferencealert.com/australia/electrical",
        "https://eaxchange.engineersaustralia.org.au/officebearerandvolunteerhub/volunteer-opportunities",
        "https://ewb.org.au/volunteer/",
        "https://www.seekvolunteer.com.au/",
        "https://www.eit.edu.au/study-areas/electrical-engineering/",
        "https://www.eit.edu.au/study-areas/mechanical-engineering/",
        "https://www.eit.edu.au/study-areas/civil-engineering/",
        "https://www.eit.edu.au/study-areas/industrial-automation-instrumentation-and-process-control/",
        "https://www.tafensw.edu.au/course-areas/engineering",
        "https://www.engineersaustralia.org.au/membership/cpd-requirements",
    ]

    for item in should_exist:
        if item not in eng:
            raise RuntimeError(f"Engineering validation failed; missing: {item}")

    forbidden = [
        "BA/Data Analyst Roles",
        "CyberSecurity Roles",
        "AI / Machine Learning & AI Security",
        "View all Macquarie courses",
        "IT & Web Development",
        "got IT volunteer roles related to SE, QA & BA",
        "IT networking events",
        "> ACS<",
    ]

    leftovers = [item for item in forbidden if item in eng]
    if leftovers:
        raise RuntimeError("IT leftovers remain: " + ", ".join(leftovers))

    for item in [
        "AIRTABLE_TOKEN",
        "AIRTABLE_BASE_ID",
        "AIRTABLE_TABLE_ID",
        '"Source URL"',
        "typecast: true",
    ]:
        if item not in lead:
            raise RuntimeError(f"Airtable validation failed; missing: {item}")

    if '"Created At"' in lead:
        raise RuntimeError('lead.cjs still writes "Created At".')

    print("Validation passed: Engineering cleaned + Airtable patched.")


def main() -> None:
    print(f"Repo root: {ROOT}")
    patch_engineering()
    patch_airtable()
    patch_frontend_error_logging()
    remove_mongodb_dependency()
    validate()

    print("\nDONE")
    print("\nAirtable table fields MUST be exactly:")
    print("  Name")
    print("  Email")
    print("  Industry")
    print("  Source URL")
    print("\nFor timestamp, add an Airtable field of type: Created time")
    print("\nNetlify environment variables:")
    print("  AIRTABLE_TOKEN")
    print("  AIRTABLE_BASE_ID")
    print("  AIRTABLE_TABLE_ID")
    print("\nThen:")
    print("  npm install")
    print("  npm run build")
    print("  git diff")
    print('  git add . && git commit -m "Fix engineering guide and Airtable lead capture"')
    print("  git push")


if __name__ == "__main__":
    main()
