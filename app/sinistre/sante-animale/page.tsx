"use client";

import { useState, useRef } from "react";
import { Upload, X, Check, Loader2, FileText, AlertCircle, Image as ImageIcon } from "lucide-react";

const ACCEPT = "application/pdf,image/jpeg,image/jpg,image/png,image/heic,image/heif";
const MAX_FILE_MB = 1.5;
const MAX_FILES = 6;

interface FileEntry {
  file: File;
  id: string;
}

const labelCls = "block text-[11px] font-black uppercase tracking-[1.5px] text-anset-blue/70 mb-1.5";
const inputCls = "w-full px-3.5 py-2.5 text-sm rounded-xl border border-anset-blue/15 bg-white focus:outline-none focus:border-anset-moutarde focus:ring-2 focus:ring-anset-moutarde/15 transition-colors font-medium text-anset-blue placeholder:text-anset-slate/50";
const sectionTitleCls = "text-base font-black text-anset-blue tracking-tight mb-1";
const sectionDescCls = "text-xs text-anset-slate font-medium mb-4";

export default function SinistreForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<FileEntry[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files ?? []);
    addFiles(selected);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function addFiles(selected: File[]) {
    setError(null);
    const newEntries: FileEntry[] = [];
    for (const file of selected) {
      if (file.size > MAX_FILE_MB * 1024 * 1024) {
        setError(`"${file.name}" dépasse ${MAX_FILE_MB} Mo`);
        continue;
      }
      if (files.length + newEntries.length >= MAX_FILES) {
        setError(`Maximum ${MAX_FILES} fichiers`);
        break;
      }
      newEntries.push({ file, id: `${file.name}-${Date.now()}-${Math.random()}` });
    }
    setFiles((prev) => [...prev, ...newEntries]);
  }

  function removeFile(id: string) {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files);
    addFiles(dropped);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      formData.delete("files");
      files.forEach((f) => formData.append("files", f.file));

      const res = await fetch("/api/sinistre", { method: "POST", body: formData });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Une erreur est survenue.");
        setSubmitting(false);
        return;
      }

      setSuccess(true);
      formRef.current?.reset();
      setFiles([]);
    } catch (err) {
      setError("Connexion impossible. Vérifiez votre réseau et réessayez.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="bg-white rounded-2xl border-2 border-anset-menthe/30 p-8 md:p-10 text-center shadow-premium-sm">
        <div className="w-14 h-14 bg-anset-menthe/15 rounded-full flex items-center justify-center mx-auto mb-5">
          <Check className="w-7 h-7 text-anset-menthe" strokeWidth={2.5} />
        </div>
        <h3 className="text-2xl font-black text-anset-blue tracking-tight mb-3">Votre demande a bien été transmise.</h3>
        <p className="text-sm text-anset-slate font-medium leading-relaxed max-w-md mx-auto mb-6">
          Vous allez recevoir un email de confirmation. Groupama Protection Juridique vous recontactera pour la suite du dossier.
        </p>
        <button onClick={() => setSuccess(false)} className="inline-flex items-center gap-2 text-sm font-black text-anset-blue hover:text-anset-moutarde-dark transition-colors">
          Déposer une autre demande →
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-7">

      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div>
        <h3 className={sectionTitleCls}>Vos coordonnées</h3>
        <p className={sectionDescCls}>Pour vous tenir informé du suivi.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className={labelCls} htmlFor="firstName">Prénom *</label>
            <input id="firstName" name="firstName" type="text" required className={inputCls} autoComplete="given-name" />
          </div>
          <div>
            <label className={labelCls} htmlFor="lastName">Nom *</label>
            <input id="lastName" name="lastName" type="text" required className={inputCls} autoComplete="family-name" />
          </div>
          <div>
            <label className={labelCls} htmlFor="email">Email *</label>
            <input id="email" name="email" type="email" required className={inputCls} autoComplete="email" placeholder="vous@exemple.com" />
          </div>
          <div>
            <label className={labelCls} htmlFor="phone">Téléphone</label>
            <input id="phone" name="phone" type="tel" className={inputCls} autoComplete="tel" placeholder="06 12 34 56 78" />
          </div>
        </div>
      </div>

      <div>
        <h3 className={sectionTitleCls}>Votre contrat</h3>
        <p className={sectionDescCls}>Les informations utiles à l'identification de votre dossier.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className={labelCls} htmlFor="contractNumber">N° de contrat *</label>
            <input id="contractNumber" name="contractNumber" type="text" required className={inputCls} placeholder="Indiqué sur vos conditions particulières" />
          </div>
          <div>
            <label className={labelCls} htmlFor="animalName">Nom de l'animal *</label>
            <input id="animalName" name="animalName" type="text" required className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="sinistreType">Type de sinistre</label>
            <select id="sinistreType" name="sinistreType" className={inputCls}>
              <option value="">— Sélectionner —</option>
              <option value="accident">Accident</option>
              <option value="maladie">Maladie</option>
              <option value="suivi">Visite de suivi</option>
            </select>
          </div>
          <div>
            <label className={labelCls} htmlFor="sinistreDate">Date du sinistre</label>
            <input id="sinistreDate" name="sinistreDate" type="date" className={inputCls} />
          </div>
        </div>
      </div>

      <div>
        <h3 className={sectionTitleCls}>Pièces justificatives *</h3>
        <p className={sectionDescCls}>
          Feuille de soins remplie par le vétérinaire, factures nominatives acquittées, ordonnances. PDF, JPG, PNG ou HEIC · max {MAX_FILES} fichiers · {MAX_FILE_MB} Mo par fichier.
        </p>

        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-anset-blue/20 rounded-2xl p-7 text-center cursor-pointer hover:border-anset-moutarde hover:bg-anset-moutarde-soft transition-all"
        >
          <input ref={fileInputRef} type="file" multiple accept={ACCEPT} onChange={handleFileSelect} className="hidden" />
          <Upload className="w-7 h-7 text-anset-blue/40 mx-auto mb-2" strokeWidth={1.5} aria-hidden="true" />
          <p className="text-sm font-black text-anset-blue mb-1">Glissez vos fichiers ici, ou cliquez pour parcourir</p>
          <p className="text-xs text-anset-slate font-medium">{files.length}/{MAX_FILES} fichiers</p>
        </div>

        {files.length > 0 && (
          <div className="mt-3 space-y-2">
            {files.map((entry) => (
              <div key={entry.id} className="flex items-center gap-3 bg-anset-mist/40 rounded-xl px-3.5 py-2.5 border border-anset-blue/8">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  {entry.file.type.startsWith("image/") ? (
                    <ImageIcon className="w-4 h-4 text-anset-blue/60" strokeWidth={1.8} aria-hidden="true" />
                  ) : (
                    <FileText className="w-4 h-4 text-anset-blue/60" strokeWidth={1.8} aria-hidden="true" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-anset-blue truncate">{entry.file.name}</p>
                  <p className="text-[11px] text-anset-slate font-medium">{(entry.file.size / 1024 / 1024).toFixed(2)} Mo</p>
                </div>
                <button type="button" onClick={() => removeFile(entry.id)} className="w-7 h-7 rounded-full bg-white hover:bg-anset-moutarde-soft text-anset-slate hover:text-anset-moutarde-dark transition-colors flex items-center justify-center flex-shrink-0" aria-label="Retirer">
                  <X className="w-3.5 h-3.5" strokeWidth={2.5} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <label className={labelCls} htmlFor="message">Message complémentaire (facultatif)</label>
        <textarea id="message" name="message" rows={4} className={inputCls} placeholder="Précisions sur les circonstances, contexte particulier, etc." />
      </div>

      <div className="flex items-start gap-2.5 pt-2">
        <input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 rounded border-anset-blue/30 text-anset-moutarde-dark focus:ring-anset-moutarde" />
        <label htmlFor="consent" className="text-xs text-anset-slate font-medium leading-relaxed">
          J'accepte que mes données et les pièces transmises soient communiquées à Groupama Protection Juridique pour le traitement de ma demande de remboursement, conformément à la <a href="/politique-de-confidentialite" className="text-anset-moutarde-dark underline hover:text-anset-moutarde-dark font-bold">politique de confidentialité</a>. *
        </label>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
          <p className="text-sm text-red-800 font-medium">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-anset-blue text-white text-sm font-black px-7 py-3.5 rounded-2xl hover:bg-anset-blue-dark transition-colors shadow-premium disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Envoi en cours…
          </>
        ) : (
          <>Envoyer ma demande</>
        )}
      </button>

      <p className="text-[11px] text-anset-slate/70 font-medium leading-relaxed">
        Votre dossier sera transmis automatiquement à Groupama Protection Juridique. Vous recevrez un accusé de réception par email.
      </p>
    </form>
  );
}