![Grafana](docs/logo-horizontal.png)

# Implementation on Fleet Management Tool ![FMTool Grafana](docs/fmtool.png)

## Development

- Source Code

```
git clone -b cce-fmtool https://github.com/iMfrances/grafana.git
```

- Start Frontend

```
yarn start
```

- Start Backend

```
make run
```

_Please note we start from the commit below since there are [known issue](https://github.com/nodejs/corepack/pull/69) of yarnpkg_

```
commit c2754eb9cc948111e6134e99e599202d2092600a
Author: Levente Balogh <balogh.levente.hu@gmail.com>
Date:   Thu Sep 30 08:34:03 2021 +0200
```

## Build Image

```
ls ./grafana/Dockerfile.ubuntu
docker build -f Dockerfile.ubuntu -t fmtool-grafana-202206014 .
```

## Upload Image to [Share Folder](https://intel.sharepoint.com/:f:/r/sites/ChinaCloudEngineeringTeam/Shared%20Documents/CCE%20Fleet%20Management%20and%20Sustain/FM%20Tool/Dockers%20Registry/Grafana?csf=1&web=1&e=8Q8cto)
