# ikea-weight-chrome-extension
Get the weight of your Ikea shopping cart to determine shipping costs


Steps:
1. Go through the Ikea shopping cart for each item
1. For each item get the URL to that item's product page --> <li itemprop="name" class="product_name__TsEv2" data-testid="product_name"><a href="https://www.ikea.com/nl/nl/p/-30421669">OGENMELON</a></li>
1. On that page the weight is right after this: <span class="pip-product-dimensions__measurement-name">Gewicht:&nbsp;</span> --> <p class="pip-product-dimensions__measurement-wrapper"><span class="pip-product-dimensions__measurement-name">Gewicht:&nbsp;</span>1.95 kg</p>


https://linuxhint.com/get-href-in-javascript/