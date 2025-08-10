# CarryOn – Portable AI Identity for Everyday People

**Tagline:** Keep your AI *you* across model updates, app wipes, and devices.

**Mission:** End the heartbreak when apps reset an AI’s personality. CarryOn gives users a portable, cryptographically signed "soulpack"—persona, memories, preferences, and tool belts—that injects into any LLM/app so the relationship survives model churn.

---

## Quickstart

```bash
make install        # create venv, install deps
make dev            # run API on :8000 with reload
make test           # run pytest
make fmt lint       # format & lint
```

## Backend

- Python 3.11+, FastAPI, SQLModel, FAISS (optional), Alembic, Docker-ready.
- Modular scaffold: soulpack, memory, consent, crypto, adapters, retrieval.

## Frontend

- Electron + React + Tailwind + shadcn/ui.
- Route stubs for onboarding, dashboard, memories, persona studio, adapters, backup.

---

## Project Structure

See [`server/`](server/) and [`apps/desktop/`](apps/desktop/).

---

## License

Apache-2.0. User ownership of data enforced by design.

---