import { defineConfig } from 'vite';
import reactRefresh     from '@vitejs/plugin-react-refresh';

// want to console.clear() before each HMR update, otherwise error show at top even though they're fixed, and new
// ones aren't visible
// https://github.com/vitejs/vite/discussions/3143

// https://vitejs.dev/config/
export default defineConfig( {
	plugins : [ reactRefresh() ]
} );
