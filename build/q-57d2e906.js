const A="data:image/png;base64,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";export{A as L};
