/**
 * Image resource files used to compress the output of the production environment
 * 图片压缩
 * https://www.npmjs.com/package/vite-plugin-image-optimizer
 */
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default function configImageOptimizerPlugin() {
  const imageOptimizerPlugin = ViteImageOptimizer();
  return imageOptimizerPlugin;
}
