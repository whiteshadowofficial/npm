FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Kaweeshachamodk/Base /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/Kaweeshachamodk/Base

CMD ["node", "index.js"]
