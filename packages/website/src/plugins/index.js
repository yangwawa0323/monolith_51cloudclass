// The background plugin
import background, { ModeEnum } from '@react-page/plugins-background';
import '@react-page/plugins-background/lib/index.css';

// The divider plugin
import divider from '@react-page/plugins-divider';

// The html 5 video plugin
import html5video from '@react-page/plugins-html5-video';
import '@react-page/plugins-html5-video/lib/index.css';

// The image plugin
import image from '@react-page/plugins-image';
import '@react-page/plugins-image/lib/index.css';

// The spacer plugin
import spacer from '@react-page/plugins-spacer';
import '@react-page/plugins-spacer/lib/index.css';

// The asciinema player plugin
import asciinemaPlayer from './asciinema';
// TODO:
// import 'asciinema_player.css'

// The codesnippet syntax highlight plugin
import codesnippet from './code_snippet';

// The slate core plugin, it is rich text area
import slate from '@react-page/plugins-slate';

const fakeImageUploadService = (defaultUrl) => (file, reportProgress) => {
	return new Promise((resolve, reject) => {
		let counter = 0;
		const interval = setInterval(() => {
			counter++;
			reportProgress(counter * 10);
			if (counter > 9) {
				clearInterval(interval);
				alert('Image has not actually been uploaded to a server.');
				resolve({ url: URL.createObjectURL(file) });
			}
		}, 100);
	});
};


export const cellPlugins = [
	slate(),
	image,
	html5video,
	asciinemaPlayer,
	spacer,
	divider,
	codesnippet,
]