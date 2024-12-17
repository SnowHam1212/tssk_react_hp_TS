import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // 動的インポートの型を適切にキャスト
    import('web-vitals').then((webVitals) => {
      const { getCLS, getFID, getFCP, getLCP, getTTFB } = webVitals;

      // 各メトリクスを onPerfEntry に渡して呼び出す
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    }).catch((error) => {
      console.error("Error loading web-vitals:", error);
    });
  }
};

export default reportWebVitals;