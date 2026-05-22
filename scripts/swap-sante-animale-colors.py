import os

files = [
    "app/produits/sante-chien-chat/page.tsx",
    "app/sinistre/sante-animale/page.tsx",
    "components/forms/SinistreForm.tsx",
]

# Ordre important : variants spécifiques d'abord
swaps = [
    ("bg-anset-corail-soft/40", "bg-anset-moutarde-soft/40"),
    ("hover:bg-anset-corail-soft/40", "hover:bg-anset-moutarde-soft/40"),
    ("bg-anset-corail-soft", "bg-anset-moutarde-soft"),
    ("text-anset-corail-dark", "text-anset-moutarde-dark"),
    ("hover:text-anset-corail-dark", "hover:text-anset-moutarde-dark"),
    ("hover:bg-anset-corail-dark", "hover:bg-anset-moutarde-dark"),
    ("hover:border-anset-corail", "hover:border-anset-moutarde"),
    ("focus:border-anset-corail", "focus:border-anset-moutarde"),
    ("focus:ring-anset-corail", "focus:ring-anset-moutarde"),
    ("border-anset-corail", "border-anset-moutarde"),
    ("bg-anset-corail", "bg-anset-moutarde"),
    ("hover:text-anset-corail", "hover:text-anset-moutarde-dark"),
    ("text-anset-corail", "text-anset-moutarde-dark"),
    # Normalisation des opacités déjà en moutarde sur la page santé animale
    ("bg-anset-moutarde/15", "bg-anset-moutarde-soft"),
]

for filepath in files:
    if not os.path.exists(filepath):
        print(f"X {filepath} introuvable")
        continue
    with open(filepath) as f:
        content = f.read()
    original = content
    for old, new in swaps:
        content = content.replace(old, new)
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"OK {filepath}")
    else:
        print(f"-  {filepath} (aucun changement)")