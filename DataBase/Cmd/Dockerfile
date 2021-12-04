FROM quay.io/lyfe00011/test:beta

RUN git clone https://github.com/Kaweeshachamodk/npm /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN yarn install --no-audit
RUN git clone https://github.com/Kaweeshachamodk/DataBase
RUN cp -R /root/Utils/* /root/WhatsAsenaDuplicated 
CMD ["node", "index.js"]
