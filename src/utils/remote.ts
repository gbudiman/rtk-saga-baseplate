interface IRemote {
  apiUrl: string;
  isLocal: boolean;
}

export default function remote(): IRemote {
  const isLocal = Boolean(window.location.host.match(/localhost/));
  const rootUrl = '//localhost:4000';
  const apiUrl = `${rootUrl}/api/v1`;

  return {
    apiUrl,
    isLocal,
  }
}
