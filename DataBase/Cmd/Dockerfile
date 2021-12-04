FROM quay.io/lyfe00011/bot:beta

RUN git clone https://github.com/Kaweeshachamodk/npm /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g

CMD ["node", "index.js"]
