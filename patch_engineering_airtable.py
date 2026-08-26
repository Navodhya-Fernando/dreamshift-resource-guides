#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import shutil
from pathlib import Path

ROOT = Path.cwd()
ENGINEERING_FILE = ROOT / "src" / "guides" / "engineering.jsx"
LEAD_FUNCTION = ROOT / "netlify" / "functions" / "lead.cjs"
ENV_EXAMPLE = ROOT / ".env.example"
PACKAGE_JSON = ROOT / "package.json"

NETWORKING_SECTION = r'''          {/* ── 02 NETWORKING ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">02 — Strategy</p>
              <h2 className="rg-title">Networking Events</h2>

              <p className="rg-p">
                A Huge Mistake, migrants make is staying in their own circles after coming to Australia.{" "}
                <strong className="rg-accent">Don’t be that guy!</strong>
              </p>

              <p className="rg-p">
                Go to as many Engineering networking events as possible, talk to more Aussies in the
                industry, because referrals can help you land jobs much faster (Referrals can almost
                guarantee you interviews if your CV is good)
              </p>

              <div className="rg-callout">
                <p className="rg-p">
                  Here are some useful places to find Engineering networking events and conferences in Australia
                </p>
              </div>

              <div className="rg-link-list">
                <a href="https://eesa.org.au/events" target="_blank" rel="noreferrer" className="rg-link-item">
                  <div className="rg-link-item-left"><span className="rg-link-item-num">01</span>Electric Energy Society of Australia</div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>

                <a href="https://portal.engineersaustralia.org.au/home/events" target="_blank" rel="noreferrer" className="rg-link-item">
                  <div className="rg-link-item-left"><span className="rg-link-item-num">02</span>Engineers Australia</div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>

                <a href="https://www.allconferencealert.com/australia/electrical" target="_blank" rel="noreferrer" className="rg-link-item">
                  <div className="rg-link-item-left"><span className="rg-link-item-num">03</span>All Conference Alert</div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>
              </div>
            </FadeUp>
          </section>

'''

COURSE_PROVIDER_BLOCK = r'''
              {/* ── ENGINEERING COURSE PROVIDERS START ── */}
              <div className="rg-course-category">
                <p className="rg-course-category-title">Australian Engineering Training Providers</p>

                <a href="https://www.eit.edu.au" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" />
                  Engineering Institute of Technology
                </a>

                <a href="https://www.tafensw.edu.au" target="_blank" rel="noreferrer" className="rg-course-item">
                  <ArrowRight size={20} className="rg-course-icon" />
                  TAFE NSW
                </a>
              </div>
              {/* ── ENGINEERING COURSE PROVIDERS END ── */}
'''

VOLUNTEERING_SECTION = r'''          {/* ── 04 VOLUNTEERING ── */}
          <section className="rg-section">
            <FadeUp>
              <p className="rg-num">04 — Strategy</p>
              <h2 className="rg-title">Volunteering</h2>

              <p className="rg-p">
                Yes, Volunteering! Aussie recruiters say they love migrants who have done volunteering
                because it shows that you are actively contributing to Australian communities.
              </p>

              <p className="rg-video-label" style={{ marginTop: 64 }}>Watch this first</p>
              <VideoEmbed
                src="https://player.vimeo.com/video/1209435820?badge=0&autopause=0&player_id=0&app_id=58479"
                title="Best Website to find Volunteering Roles in Australia if you don't have local job experience"
              />

              <div className="rg-link-list">
                <p className="rg-video-label" style={{ textAlign: "left", marginTop: 20 }}>
                  Engineering & Community Volunteering Options
                </p>

                <a href="https://www.seekvolunteer.com.au/" target="_blank" rel="noreferrer" className="rg-link-item">
                  <div className="rg-link-item-left"><span className="rg-link-item-num">01</span>SEEK Volunteer</div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>

                <a href="https://eaxchange.engineersaustralia.org.au/officebearerandvolunteerhub/volunteer-opportunities" target="_blank" rel="noreferrer" className="rg-link-item">
                  <div className="rg-link-item-left"><span className="rg-link-item-num">02</span>Engineers Australia</div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>

                <a href="https://ewb.org.au/volunteer/" target="_blank" rel="noreferrer" className="rg-link-item">
                  <div className="rg-link-item-left"><span className="rg-link-item-num">03</span>Engineers Without Borders Australia</div>
                  <ExternalLink size={20} opacity={0.3} />
                </a>
              </div>
            </FadeUp>
          </section>

'''

AIRTABLE_FUNCTION = r'''exports.handler = async function (event) {
  const headers = { "Content-Type": "application/json" };

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { name, email, industry, sourceUrl } = JSON.parse(event.body || "{}");

    if (!name?.trim() || !email?.trim()) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Name and email are required" }),
      };
    }

    const token = process.env.AIRTABLE_TOKEN;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableId = process.env.AIRTABLE_TABLE_ID;

    if (!token || !baseId || !tableId) {
      console.error("Missing Airtable environment variables");
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Airtable is not configured" }),
      };
    }

    const airtableUrl =
      `https://api.airtable.com/v0/${encodeURIComponent(baseId)}/${encodeURIComponent(tableId)}`;

    const airtableResponse = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Name: name.trim(),
              Email: email.trim(),
              Industry: industry || "general",
              "Source URL": sourceUrl || "",
              "Created At": new Date().toISOString(),
            },
          },
        ],
        typecast: true,
      }),
    });

    const result = await airtableResponse.json();

    if (!airtableResponse.ok) {
      console.error("Airtable error:", JSON.stringify(result));
      return {
        statusCode: airtableResponse.status,
        headers,
        body: JSON.stringify({ error: "Failed to save lead", details: result }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        ok: true,
        id: result.records?.[0]?.id || null,
      }),
    };
  } catch (error) {
    console.error("Lead capture error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to save lead" }),
    };
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
        print(f"Backup: {backup_path.relative_to(ROOT)}")

def replace_between(text: str, start_marker: str, end_marker: str, replacement: str) -> str:
    start = text.find(start_marker)
    if start == -1:
        raise RuntimeError(f"Could not find start marker: {start_marker}")
    end = text.find(end_marker, start)
    if end == -1:
        raise RuntimeError(f"Could not find end marker: {end_marker}")
    return text[:start] + replacement + text[end:]

def patch_engineering() -> None:
    if not ENGINEERING_FILE.exists():
        raise FileNotFoundError(f"Missing {ENGINEERING_FILE}")

    backup(ENGINEERING_FILE)
    text = ENGINEERING_FILE.read_text(encoding="utf-8")

    text = replace_between(
        text,
        "          {/* ── 02 NETWORKING ── */}",
        "          {/* ── 03 COURSES ── */}",
        NETWORKING_SECTION,
    )

    text = re.sub(
        r"\n\s*\{/\* ── ENGINEERING COURSE PROVIDERS START ── \*/\}.*?"
        r"\{/\* ── ENGINEERING COURSE PROVIDERS END ── \*/\}\n",
        "\n",
        text,
        flags=re.S,
    )

    heading = '<h2 className="rg-title">Online Courses & Certifications'
    idx = text.find(heading)
    if idx == -1:
        raise RuntimeError("Could not locate Online Courses heading.")

    close_idx = text.find("</h2>", idx)
    if close_idx == -1:
        raise RuntimeError("Could not find closing h2 for Online Courses.")
    close_idx += len("</h2>")

    text = text[:close_idx] + "\n" + COURSE_PROVIDER_BLOCK + text[close_idx:]

    text = replace_between(
        text,
        "          {/* ── 04 VOLUNTEERING ── */}",
        "          {/* ── CTA ── */}",
        VOLUNTEERING_SECTION,
    )

    ENGINEERING_FILE.write_text(text, encoding="utf-8")
    print(f"Patched: {ENGINEERING_FILE.relative_to(ROOT)}")

def patch_airtable_function() -> None:
    LEAD_FUNCTION.parent.mkdir(parents=True, exist_ok=True)
    backup(LEAD_FUNCTION)
    LEAD_FUNCTION.write_text(AIRTABLE_FUNCTION, encoding="utf-8")
    print(f"Patched: {LEAD_FUNCTION.relative_to(ROOT)}")

def patch_env_example() -> None:
    backup(ENV_EXAMPLE)
    ENV_EXAMPLE.write_text(ENV_CONTENT, encoding="utf-8")
    print(f"Patched: {ENV_EXAMPLE.relative_to(ROOT)}")

def remove_mongodb_dependency() -> None:
    if not PACKAGE_JSON.exists():
        print("Skipped package.json: file not found")
        return

    backup(PACKAGE_JSON)
    data = json.loads(PACKAGE_JSON.read_text(encoding="utf-8"))

    changed = False
    for section in ("dependencies", "devDependencies"):
        deps = data.get(section)
        if isinstance(deps, dict) and "mongodb" in deps:
            del deps["mongodb"]
            changed = True

    if changed:
        PACKAGE_JSON.write_text(
            json.dumps(data, indent=2, ensure_ascii=False) + "\n",
            encoding="utf-8",
        )
        print("Removed mongodb dependency from package.json")
    else:
        print("mongodb dependency not present; package.json unchanged")

def validate() -> None:
    engineering = ENGINEERING_FILE.read_text(encoding="utf-8")
    lead = LEAD_FUNCTION.read_text(encoding="utf-8")

    for value in [
        "https://eesa.org.au/events",
        "https://portal.engineersaustralia.org.au/home/events",
        "https://www.allconferencealert.com/australia/electrical",
        "https://www.eit.edu.au",
        "https://www.tafensw.edu.au",
        "https://www.seekvolunteer.com.au/",
        "https://eaxchange.engineersaustralia.org.au/officebearerandvolunteerhub/volunteer-opportunities",
        "https://ewb.org.au/volunteer/",
        "1209435820",
    ]:
        if value not in engineering:
            raise RuntimeError(f"Validation failed; missing: {value}")

    for value in [
        "AIRTABLE_TOKEN",
        "AIRTABLE_BASE_ID",
        "AIRTABLE_TABLE_ID",
        "api.airtable.com",
    ]:
        if value not in lead:
            raise RuntimeError(f"Validation failed in lead.cjs; missing: {value}")

    print("Validation passed.")

def main() -> None:
    print(f"Repo root: {ROOT}")
    patch_engineering()
    patch_airtable_function()
    patch_env_example()
    remove_mongodb_dependency()
    validate()

    print("\nDone.")
    print("Next commands:")
    print("  npm install")
    print("  npm run build")
    print("  git diff")
    print('  git add . && git commit -m "Patch engineering resources and Airtable leads"')
    print("  git push")
    print("\nAdd these in Netlify:")
    print("  AIRTABLE_TOKEN")
    print("  AIRTABLE_BASE_ID")
    print("  AIRTABLE_TABLE_ID")
    print("\nAirtable fields expected:")
    print("  Name | Email | Industry | Source URL | Created At")

if __name__ == "__main__":
    main()
