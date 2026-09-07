import os

from camoufox.sync_api import Camoufox

with Camoufox(headless="virtual", geoip=True) as browser:
    page = browser.new_page(viewport={"width": 1280, "height": 800})
    try:
        page.goto(os.environ["TARGET_URL"], wait_until="load", timeout=60000)
    except Exception as e:
        print("goto error:", e)
    page.wait_for_timeout(5000)
    page.screenshot(path="camoufox.png", full_page=True)
