import styles from './index.module.scss'
import AgoraRTC, {AgoraRTCProvider} from 'agora-rtc-react'

interface Props {
	children: any
}

const client = AgoraRTC.createClient({ 
	mode:'live', 
	codec: 'vp8' 
});

const Main = function Main({ children }: Props) {
	return (
		<AgoraRTCProvider client={client}>
			<div className={styles.container}>{children}</div>
		</AgoraRTCProvider>
	)
}

export default Main
