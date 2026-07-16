export type LearningPathBrandInput = {
  label: string;
  href: string;
  source: string;
};

export type LearningPathBrand = {
  name: string;
  short: string;
  iconUrl: string;
};

type KnownLearningPathBrand = LearningPathBrand & {
  pattern: RegExp;
  featured?: boolean;
};

export const learningPathBrandIcons = [
  { pattern: /openai|developers\.openai/i, name: "OpenAI", short: "AI", iconUrl: "https://openai.com/favicon.ico", featured: true },
  { pattern: /langgraph/i, name: "LangGraph", short: "LG", iconUrl: "https://www.langchain.com/favicon.ico", featured: true },
  { pattern: /langchain/i, name: "LangChain", short: "LC", iconUrl: "https://www.langchain.com/favicon.ico", featured: true },
  { pattern: /llamaindex/i, name: "LlamaIndex", short: "LI", iconUrl: "https://www.llamaindex.ai/favicon.ico", featured: true },
  { pattern: /microsoft|autogen/i, name: "Microsoft AutoGen", short: "MS", iconUrl: "https://www.microsoft.com/favicon.ico", featured: true },
  { pattern: /huggingface|hugging face/i, name: "Hugging Face", short: "HF", iconUrl: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", featured: true },
  { pattern: /llamafactory|llama factory/i, name: "LLaMA Factory", short: "LF", iconUrl: "https://llamafactory.readthedocs.io/en/latest/_static/favicon.ico" },
  { pattern: /autogluon|auto\.gluon/i, name: "AutoGluon", short: "AG", iconUrl: "https://auto.gluon.ai/stable/_static/favicon.ico", featured: true },
  { pattern: /pytorch|torchvision|pytorchvideo/i, name: "PyTorch", short: "PT", iconUrl: "https://pytorch.org/favicon.ico", featured: true },
  { pattern: /tensorflow/i, name: "TensorFlow", short: "TF", iconUrl: "https://www.tensorflow.org/favicon.ico", featured: true },
  { pattern: /pgmpy/i, name: "pgmpy", short: "PG", iconUrl: "https://pgmpy.org/_static/favicon.ico" },
  { pattern: /geopandas/i, name: "GeoPandas", short: "GP", iconUrl: "https://geopandas.org/en/stable/_static/favicon.png" },
  { pattern: /scikit-image/i, name: "scikit-image", short: "SI", iconUrl: "https://scikit-image.org/docs/stable/_static/favicon.ico" },
  { pattern: /scikit-learn/i, name: "scikit-learn", short: "SK", iconUrl: "https://scikit-learn.org/stable/_static/favicon.ico", featured: true },
  { pattern: /xgboost/i, name: "XGBoost", short: "XG", iconUrl: "https://xgboost.readthedocs.io/en/stable/_static/favicon.ico" },
  { pattern: /numpy/i, name: "NumPy", short: "NP", iconUrl: "https://numpy.org/images/favicon.ico", featured: true },
  { pattern: /imbalanced-learn/i, name: "imbalanced-learn", short: "IL", iconUrl: "https://imbalanced-learn.org/stable/_static/favicon.ico" },
  { pattern: /pandas/i, name: "pandas", short: "PD", iconUrl: "https://pandas.pydata.org/static/img/favicon_white.ico", featured: true },
  { pattern: /gymnasium|farama/i, name: "Gymnasium", short: "GY", iconUrl: "https://gymnasium.farama.org/_static/favicon.png" },
  { pattern: /recbole/i, name: "RecBole", short: "RB", iconUrl: "https://recbole.io/docs/_static/favicon.ico" },
  { pattern: /opencv/i, name: "OpenCV", short: "CV", iconUrl: "https://opencv.org/wp-content/uploads/2020/07/cropped-favicon-32x32.png", featured: true },
  { pattern: /tesseract/i, name: "Tesseract OCR", short: "OCR", iconUrl: "https://tesseract-ocr.github.io/tessdoc/favicon.ico" },
] as const satisfies readonly KnownLearningPathBrand[];

export const heroOfficialBrands = learningPathBrandIcons.filter((brand) => "featured" in brand && brand.featured);

export function getLearningPathBrand(item: LearningPathBrandInput): LearningPathBrand {
  const searchableText = `${item.source} ${item.label} ${item.href}`;
  const matchedBrand = learningPathBrandIcons.find((brand) => brand.pattern.test(searchableText));

  if (matchedBrand) {
    return matchedBrand;
  }

  try {
    const url = new URL(item.href);
    const short = url.hostname
      .replace(/^www\./, "")
      .split(".")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("");

    return {
      name: item.source,
      short: short || "DOC",
      iconUrl: `${url.origin}/favicon.ico`,
    };
  } catch {
    return {
      name: item.source,
      short: "DOC",
      iconUrl: "",
    };
  }
}
